Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function print() {
    var list = new Array();
    var cDate = new Date(document.getElementById('from').value);
    
    while (cDate <= new Date(document.getElementById('to').value)) {
        list+= (moment(cDate , "YYYY-MM-DD").format(document.getElementById('format').value)) + "\n";
        if(document.querySelector('#linebreak').checked) {
            list += "\n";
        }
        cDate = cDate.addDays(1);
    }
    document.getElementById('result').innerText = list;
}

function print_month() {
    var list = new Array();
    var cDate = new Date(moment(document.getElementById('month').value , "MM").startOf('month'));
    
    while (cDate <= new Date(moment(document.getElementById('month').value , "MM").endOf('month'))) {
        list+= (moment(cDate , "MM").format(document.getElementById('format').value)) + "\n";
        if(document.querySelector('#linebreak').checked) {
            list += "\n";
        }
        cDate = cDate.addDays(1);
    }
    document.getElementById('result').innerText = list;
}