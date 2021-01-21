


function kilometerToMeter(kilometer) 
{
    if (kilometer < 0) 
    {
        return "Error :Distance can not be negative";
    }

     else 
    {
        var meter = kilometer * 1000;
    }
    return meter;
}

// var result = kilometerToMeter(5);
// console.log(result);


function budgetCalculator(watch, mobile, laptop) 
{

    if ((watch < 0) || (mobile < 0) || (laptop < 0))
    {
        return "Error :  Price can not be negative";
    } 

    else 
    {
        var watchPrice = watch * 50;
        var mobilePrice = mobile * 100;
        var laptopPrice = laptop * 500;

        var totalPrice = watchPrice + mobilePrice + laptopPrice;

    }

    return totalPrice;

}

// var result=budgetCalculator(5,10,15);
// console.log(result);




function hotelCost(daysCount) 
{
    var totalCost = 0;
    if (daysCount < 0)
    {
        return "Error: Days Count can not be negative";
    } 
    else if (daysCount <= 10) 
    {
        totalCost = daysCount * 100;
    } 
    else if (daysCount <= 20) 
    {
        var firstTenDays = 10 * 100;
        var remainingDays = daysCount - 10;
        var extraDays = remainingDays * 80;
        totalCost = firstTenDays + extraDays;
    } 
    else 
    {
        var firstTenDays = 10 * 100;
        var extraDays = 10 * 80;
        var remainingDays = daysCount - 20;
        var extendedStay = remainingDays * 50;

        totalCost = firstTenDays + extraDays + extendedStay;

    }

    return totalCost;

}

// var result= hotelCost(13);
// console.log(result);


function megaFriend(friendName) 
{
    var nameLength = 0;
    var longestName;

    if (friendName.length == 0) 
    {
        return "Error : Array is empty";
    } 
    else 
    {
        for (i = 0; i < friendName.length; i++) 
        {

            if (friendName[i].length > nameLength) 
            {
                nameLength = friendName[i].length;
                longestName = friendName[i];

            }


        }

    }


    return longestName;
}

// var names=["Ani","Fahim","Moshiur","Homaira","Afsana","Shakib","Mashrafee"];
// var result= megaFriend(names);
// console.log(result);