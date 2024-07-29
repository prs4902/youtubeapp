const valueConverter =(value)=>{
    const M = 1000000;
    const K = 1000; 
    if(value>M)
        return Math.floor(value/M)+"M";
    else if(value>=K)
        return Math.floor(value/K)+"K";
    else if(value<K)
        return value;
}
// date and time converter
const getDaysAndMonthsSince = (dateString) => {
const date = new Date(dateString);
const now = new Date();

// Calculate the difference in milliseconds
const diffTime = Math.abs(now - date);

// Calculate the number of days
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

// Calculate the number of months
const diffMonths = Math.floor(diffDays / 30);

return {
  days: diffDays,
  months: diffMonths,
};
};

export {getDaysAndMonthsSince,valueConverter};