let sin_or_cos = 0;

let sup_num  = ["°", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];

function to_superscript(a){
    let res = "";
    if(a == 1){
        return "";
    }
    while(a > 0){
        res = sup_num[a % 10] + res;
        a = Math.floor(a / 10);
    }
    return res;
}

function gcd(a, b){
    a = Math.abs(a);
    b = Math.abs(b);
    while(b){
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function factorial(a){
    let res = 1;
    for (let i = 2; i <= a; i++) {
        res *= i;
    }
    return res;
}

function sinorcos(){
    let a = document.getElementById("sinorcos").value;
    sin_or_cos = (a == "cos");
    document.getElementById("function").innerHTML = a;
}

function no_1(a){
    if(a==1){
        return "";
    }else{
        return a.toString();
    }
}

function i_cos(a, n, d, m){
    if(a == 0){
        let p = m;
        let q = d;
        let g = gcd(p, q);
        if(Math.abs(p) == q){
            if(p > 0){
                return "x";
            }else{
                return "-x"
            }
        }else if(q/g == 1){
            return p / g + " x";
        }else{
            return p / g+ "/" + q / g + " x";
        }
    }else if(a % 2){
        let b = (a - 1) / 2;
        let res = "";
        for (let i = 0; i <= b; i++) {
            let p = Math.pow(-1, b - i) * factorial(b) / factorial(i) / factorial(b - i) * m;
            let q = (2 * (b - i) + 1) * d * n;
            let g = gcd(p, q);
            if(Math.abs(p) == q){
                if(p > 0){
                    res += "sin" + to_superscript(2 * (b - i) + 1) + "(" + no_1(n) + "x) + ";
                }else{
                    res += "-sin" + to_superscript(2 * (b - i) + 1) + "(" + no_1(n) + "x) + ";
                }
            }else if(q/g == 1){
                res += p / g + " sin" + to_superscript(2 * (b - i) + 1) + "(" + no_1(n) + "x) + ";
            }else{
                res += p / g+ "/" + q / g + " sin" + to_superscript(2 * (b - i) + 1) + "(" + no_1(n) + "x) + ";
            }
        }
        //res += "sin(" + no_1(n) + "x)";
        return res.substring(0, res.length - 3);
    }else{
        let div = Math.pow(2, a/2) * d;
        let b = a / 2;
        let res = "";
        for (let i = 0; i <= b; i++) {
            let p = /*Math.pow(-1, b - i) * */factorial(b) / factorial(i) / factorial(b - i) * m;
            let q = i;
            // let g = gcd(p, q);
            res += i_cos(q, 2 * n, div, p) + " + ";
            
        }
        return res.substring(0, res.length - 3);
    }
}

function i_sin(a, n, d, m){
    if(a == 0){
        let p = m;
        let q = d;
        let g = gcd(p, q);
        if(Math.abs(p) == q){
            if(p > 0){
                return "x";
            }else{
                return "-x"
            }
        }else if(q/g == 1){
            return p / g + " x";
        }else{
            return p / g+ "/" + q / g + " x";
        }
    }else if(a % 2){
        let b = (a - 1) / 2;
        let res = "";
        for (let i = 0; i <= b; i++) {
            let p = Math.pow(-1, b - i + 1) * factorial(b) / factorial(i) / factorial(b - i) * m;
            let q = (2 * (b - i) + 1) * d * n;
            let g = gcd(p, q);
            if(Math.abs(p) == q){
                if(p > 0){
                    res += "cos" + to_superscript(2 * (b - i) + 1) + "(" + no_1(n) + "x) + ";
                }else{
                    res += "-cos" + to_superscript(2 * (b - i) + 1) + "(" + no_1(n) + "x) + ";
                }
            }else if(q/g == 1){
                res += p / g + " cos" + to_superscript(2 * (b - i) + 1) + "(" + no_1(n) + "x) + ";
            }else{
                res += p / g+ "/" + q / g + " cos" + to_superscript(2 * (b - i) + 1) + "(" + no_1(n) + "x) + ";
            }
        }
        //res += "sin(" + no_1(n) + "x)";
        return res.substring(0, res.length - 3);
    }else{
        let div = Math.pow(2, a/2) * d;
        let b = a / 2;
        let res = "";
        for (let i = 0; i <= b; i++) {
            let p = Math.pow(-1, i) * factorial(b) / factorial(i) / factorial(b - i) * m;
            let q = i;
            // let g = gcd(p, q);
            res += i_cos(q, 2 * n, div, p) + " + ";
            
        }
        return res.substring(0, res.length - 3);
    }
}

function run(){
    let input_ = parseInt(document.getElementById("pow").value);
    if(sin_or_cos){
        document.getElementById("output").innerHTML = "<p>" + i_cos(input_, 1, 1, 1) + " + k</p>";
    }else{
        document.getElementById("output").innerHTML = "<p>" + i_sin(input_, 1, 1, 1) + " + k</p>";
    }
}