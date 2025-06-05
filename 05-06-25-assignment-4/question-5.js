// Q5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

function convertToCamelcase(str){
    let len=str.length;
    let i=0;
    let camelCasedString=""

    while(i<len)
    {
        if(str[i]===" ")
        {
            camelCasedString+=str[i+1].toUpperCase();
            i=i+2;
        }

        else{
            camelCasedString+=str[i];
            i++;
        }
    }
    return camelCasedString;
}

console.log(convertToCamelcase("hello john doe"));

