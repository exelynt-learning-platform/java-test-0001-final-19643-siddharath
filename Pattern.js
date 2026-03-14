let n = 5;

for (let i = 1; i <= n; i++) 
{

    let line = "";
    for (let j = 1; j <= n - i; j++)
    {
        line += " ";
    }

    line += "*";

    if (i > 1)
 {
        for (let j = 1; j <= 2 * i - 3; j++) 
        {
            line += " ";
        }
        line += "*";
    }

    console.log(line);
}

for (let i = n - 1; i >= 1; i--) 
{

    let line = "";

    for (let j = 1; j <= n - i; j++)
 {
        line += " ";
    }

    line += "*";

    if (i > 1) 
    {
        for (let j = 1; j <= 2 * i - 3; j++) 
        {
            line += " ";
        }
        line += "*";
    }
    console.log(line);
}