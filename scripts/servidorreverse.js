
$('document').ready(function () {

    $.ajax({
        type: "POST",
        url: "chart.php",
        dataType: "json",
        success: function (data) {

            var nomearray = [];
            var vendasarray = [];

            for (var i = 0; i < data.length; i++) {

                nomearray.push(data[i].nome);
                vendasarray.push(data[i].vendas);

            }

            grafico(nomearray,vendasarray);

        }
    });

})

function grafico(nome,vendas) {


    var ctx = document.getElementById('myChart').getContext('2d');

    var chart = new Chart(ctx, {

        type: 'horizontalBar',
        data: {
            labels: nome,


            datasets: [{
                label: 'Gráfico',
                backgroundColor: ['green', 'blue', 'yellow'],
                borderColor: 'rgb(255, 99, 132)',
                data: vendas
            }]
        },

        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}