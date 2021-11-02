var dict ;
dict=
{
    "Firstname":"Aishwarya",
    "Lastname":"Udupi",
    "USN":     027,
    "Address":
    {
        "House_No":011,
        "Street":"06th Cross",
        "city":"Dharwad",
        "pin_No":580007
    },
    "course":"Python",
    "mark":65

};
var key;

for( key in dict) 
{
    console.log(key,":",dict[key]);
}