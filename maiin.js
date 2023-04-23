function quad(a, b, c) {
    if(a==0) return "Ошибка, a=0 недопустимое значение!";
    var D=b*b-4*a*c;
    var x1, x2;
    if(D>0){
      x1=(-b+Math.sqrt(D))/(2*a);
      x2=(-b-Math.sqrt(D))/(2*a);
      return "Коэфиценты: a="+a+", b="+b+", c="+c+"\n\nШаги решения:\n"+
        "D = b^2 - 4ac \n D = "+b+"^2 - 4*"+a+"*"+c+" = "+D+"\n\n\n"+
        "x1 = (-b + sqrt(D)) / (2a) \n x1 = (-"+b+" + sqrt("+D+")) / (2*"+a+") = "+x1+"\n\n\n"+
        "x2 = (-b - sqrt(D)) / (2a) \n x2 = (-"+b+" - sqrt("+D+")) / (2*"+a+") = "+x2+"\n\n\n"+
        "\n\n"+"Ответ: x1="+x1+", x2="+x2+", D="+D;
    } else if (D==0){
      x1=-b/(2*a);
      return "Коэфиценты: a="+a+", b="+b+", c="+c+"\n\nШаги решения:\n"+
        "D = b^2 - 4ac \n D = "+b+"^2 - 4*"+a+"*"+c+" = "+D+"\n\n\n"+
        "x = -b / 2a \n x = -("+b+") / (2*"+a+") = "+x1+"\n\n"+
        "\n\n"+"Ответ: x1="+x1+", D="+D;
    } else if(D<0) {
      var realPart = (-b / (2 * a)).toFixed(2);
      var imagPart = (Math.sqrt(-D) / (2 * a)).toFixed(2);
      return "Коэфиценты: a="+a+", b="+b+", c="+c+"\n\nШаги решения:\n"+
        "D = b^2 - 4ac \n D = "+b+"^2 - 4*"+a+"*"+c+" = "+D+"\n\n\n"+
       
        "\n\n"+"Ответ: Нет корней, т.к. D="+D;
    }
  }
  
  function prog(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var result = quad(a, b, c);
    document.getElementById('result').textContent = result;
    document.getElementById('otvet').style.display = 'block';
  }