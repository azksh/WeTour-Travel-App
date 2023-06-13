
        var lat = -3.3730914;
        var lon = 105.7116703;



        function getWilayah() {
            $.getJSON('https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json', function (data) {
                var items = [];
                var jml = data.length;

                //hitung jarak
                for (n = 0; n < jml; n++) {
                    data[n].jarak = distance(lat, lon, data[n].lat, data[n].lon, 'K');
                }

                //urutkan berdasarkan jarak
                data.sort(urutkanJarak);
                var nama_kota=document.getElementById("kota").value;
                var nama_data="";
                nama_kota = nama_kota.toUpperCase();
                //setelah dapat jarak,  ambil 5 terdekat
                for (n = 0; n < jml; n++) {
                    items.push('<li class="list-group-item d-flex justify-content-between align-items-center">' + data[n].propinsi +
                        ', ' + data[n].kota + ', ' + data[n].kecamatan + '<span class="badge badge-primary badge-pill">' + data[n].jarak.toFixed(2) + ' km</span></li>');
                    if (n > 400) break;
                   // alert(data[n].kota);
                   nama_data=data[n].kota;
                   nama_data=nama_data.toUpperCase();
                    if(nama_data.indexOf(nama_kota)>=0)
                    {
                       // alert(data[n].kota);
                        break;
                    }
                };
                $('#judulTerdekat').html("Jarak terdekat dari " + lat + "," + lon);
                $('#wilayahTerdekat').html(items.join(""));
                $('#judulCuaca').html(data[n].propinsi +
                        ', ' + data[n].kota + ', ' + data[n].kecamatan + ' ' + data[n].jarak.toFixed(2)+" km dari lokasi anda");
                getCuaca(data[n].id);
            });
        }

        function getCuaca(idWilayah) {
            $.getJSON('https://ibnux.github.io/BMKG-importer/cuaca/'+idWilayah+'.json', function (data) {
                var items = [];
                var jml = data.length;

                //setelah dapat jarak,  ambil 5 terdekat
                for (n = 0; n < jml; n++) {
                    items.push('<div class="item">'+
                            '<img style="width:50px" src="https://ibnux.github.io/BMKG-importer/icon/'+
                            data[n].kodeCuaca+
                            '.png" class="card-img-top">'+
                            '<div class="card-body"><h5 style="font-size:15px" class="card-title">'+
                            data[n].cuaca+
                            '</h5><p style="font-size:15px" class="card-text">'+
                            data[n].jamCuaca+
                            '</p></div></div>');
                    if (n > 4) break
                };
                $('#cuaca').html(items.join(""));
            });
        }

        // https://www.htmlgoodies.com/beyond/javascript/calculate-the-distance-between-two-points-in-your-web-apps.html
        function distance(lat1, lon1, lat2, lon2) {
            var radlat1 = Math.PI * lat1 / 180
            var radlat2 = Math.PI * lat2 / 180
            var theta = lon1 - lon2
            var radtheta = Math.PI * theta / 180
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            dist = Math.acos(dist)
            dist = dist * 180 / Math.PI
            dist = dist * 60 * 1.1515
            return Math.round((dist * 1.609344) * 1000) / 1000;
        }

        function urutkanJarak(a, b) {
            if (a['jarak'] === b['jarak']) {
                return 0;
            }
            else {
                return (a['jarak'] < b['jarak']) ? -1 : 1;
            }
        }

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, onErrorGPS);
            } else {
                //ga bisa dapat GPS, pake default aja
                getWilayah();
            }
        }

        function showPosition(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            getWilayah();
        }

        function onErrorGPS(error) {
            //ake default aja
            getWilayah();
        }

        getLocation();
    