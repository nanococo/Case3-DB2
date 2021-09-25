window.addEventListener('load', (event) => {
    fetch('http://localhost:5000/api/subastas/getAll')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            generateCards(data)
        }).catch(error => console.log(error));
});

function generateCards(data){

    for (let i = 0; i < data.length; i++) {
        let release  = new Date(data[i].fechaPublicacion).toDateString();
        let close  = new Date(data[i].fechaExpiracion).toDateString();
        let sold = ""
        if(data[i].activo){
            sold = "featured"
        }

        document.getElementById("cards").innerHTML += `<div id="card" class="card ${sold}">
                <div class="photo">
                    <!-- <img src="http://image.shutterstock.com/display_pic_with_logo/565474/142345144/stock-photo-day-view-of-a-hotel-exterior-with-window-to-dining-room-142345144.jpg"/> -->
                    <div class="img" style="background-image: url(${data[i].imagen});"></div>
                    <div class="price">
                        $ ${data[i].precioActual}<span class="currency"> USD</span>
                    </div>
                    <div class="title">
                        <div class="sale-label">
                        </div>
                        <div class="feature-label">
                            Sold
                        </div>
                        <h3>${data[i].nombreArticulo}</h3>
                    </div>
                </div>
                <div class="description animate">
                    <div class="title">
                        <h3>${data[i].nombreArticulo}</h3>
                    </div>

                    <div class="top">

                        <div class="address">
                            ${data[i].descripcion}
                        </div>
                        <div class="phone">
                            Fecha de publicación: ${release} <br>
                            Fecha de cierre: ${close} <br>
                            Precio Inicial: ${data[i].precioinicial}
                        </div>
                    </div>
                    <div class="bottom">
                        Año del artículo: ${data[i].annoArticulo}
                    </div>

                    <div class="callToAction">
                        <a href="https://fiddle.jshell.net/0pgynh71/show/light/#">View</a>
                    </div>
                </div>
            </div>`;
    }
}
