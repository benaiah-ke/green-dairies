var price = 45;

document.getElementById('input-form').addEventListener('submit', function(event){
    // Prevent the event from proceeding
    event.preventDefault();

    // Get the daily production values
    var shed_a_daily = document.getElementById("shed-a").value;
    var shed_b_daily = document.getElementById("shed-b").value;
    var shed_c_daily = document.getElementById("shed-c").value;
    var shed_d_daily = document.getElementById("shed-d").value;

    // Validate
    if(shed_a_daily == '' || shed_b_daily == '' || shed_c_daily == '' || shed_d_daily == ''){
        alert('Enter daily production for all sheds!');
        return; // Stop further execution
    }


    //Output daily production
    document.getElementById("shed_a_daily_production").innerText = shed_a_daily + " litres";
    document.getElementById("shed_b_daily_production").innerText = shed_b_daily + " litres";
    document.getElementById("shed_c_daily_production").innerText = shed_c_daily + " litres";
    document.getElementById("shed_d_daily_production").innerText = shed_d_daily + " litres";

    // Output daily income
    document.getElementById("shed_a_daily_income").innerText = "ksh " + (shed_a_daily * price);
    document.getElementById("shed_b_daily_income").innerText = "ksh " + (shed_b_daily * price);
    document.getElementById("shed_c_daily_income").innerText = "ksh " + (shed_c_daily * price);
    document.getElementById("shed_d_daily_income").innerText = "ksh " + (shed_d_daily * price);


    //Output weekly production
    document.getElementById("shed_a_weekly_production").innerText = (shed_a_daily * 7) + " litres";
    document.getElementById("shed_b_weekly_production").innerText = (shed_b_daily * 7) + " litres";
    document.getElementById("shed_c_weekly_production").innerText = (shed_c_daily * 7) + " litres";
    document.getElementById("shed_d_weekly_production").innerText = (shed_d_daily * 7) + " litres";

    // Output weekly income
    document.getElementById("shed_a_weekly_income").innerText = "ksh " + (shed_a_daily * 7 * price);
    document.getElementById("shed_b_weekly_income").innerText = "ksh " + (shed_b_daily * 7 * price);
    document.getElementById("shed_c_weekly_income").innerText = "ksh " + (shed_c_daily * 7 * price);
    document.getElementById("shed_d_weekly_income").innerText = "ksh " + (shed_d_daily * 7 * price);



    // Calculate monthly and annual production
    // Will store production values for each month
    var shed_a_monthly = [];
    var shed_b_monthly = [];
    var shed_c_monthly = [];
    var shed_d_monthly = [];


    // Will store yearly values
    var total_yearly_production = 0;


    var months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Days in each month
    var month_names = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    for(i=0; i<months.length; i++){
        // Multiply daily production by days in that month
        // And store to respective array
        shed_a_monthly = shed_a_daily * months[i];
        shed_b_monthly = shed_b_daily * months[i];
        shed_c_monthly = shed_c_daily * months[i];
        shed_d_monthly = shed_d_daily * months[i];

        var total_monthly_production = shed_a_monthly + shed_b_monthly + shed_c_monthly + shed_d_monthly;
        var total_monthly_income = total_monthly_production * price;

        // Increment yearly production value
        total_yearly_production += + total_monthly_production;


        // Output the monthly production
        // Add to the existing innerHTML
        document.getElementById('monthly-report-det').innerHTML += `
            <div id="month" class="shed-report">
                <p>The production for <strong>${month_names[i]}</strong> is:</p>
                <div class="shed-month">
                    <p>Shed A <span>${shed_a_monthly} litres</span></p><p>Shed B <span>${shed_b_monthly} litres</span></p><p>Shed C <span>${shed_c_monthly} litres</span></p><p>Shed D <span>${shed_d_monthly} litres</span></p>
                </div>
                <div class="month-totals">    
                    <p>Total Production for ${month_names[i]} is<span> ${total_monthly_production} litres</span></p>
                    <p>Total Income for ${month_names[i]} is <span>Ksh ${total_monthly_income}</span></p>
                </div>
            </div>
        `;
    }


    // Output the yearly production and income
    total_yearly_income = total_yearly_production * price;

    document.getElementById("total_yearly_production").innerText = total_yearly_production + " litres";
    document.getElementById("total_yearly_income").innerText = "ksh " + total_yearly_income;

});

let proceed = function () {
    var shed_a_daily = document.getElementById("shed-a").value;
    
    var shed_b_daily = document.getElementById("shed-b").value;
    var shed_c_daily = document.getElementById("shed-c").value;
    var shed_d_daily = document.getElementById("shed-d").value;

    document.getElementById("a-daily-p").innerHTML = shed_a_daily + " " + "litres";
}