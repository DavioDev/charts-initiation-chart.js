var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: "bar", 
    data: {
        labels: ['January', 'February', 'March' ],
        
        
        datasets: [{
            label: ["grafico"],
            backgroundColor: ["green", "blue", "red"],
            borderColor: ["green", "blue", "red"],
            data: [3, 18, 5]
        }]
    },
    
})