   


function onSchlopp() {
     // definitions of vowels and consonants //
    let vowelList = "aeiouAEIOU";
    let consonantList = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    //patterns to be used for schloppification //
    let patternOneString = "cvc";
    let patternTwoString = "cvvc";
    let patternThreeString = "vc";
    //checks letters in a string to determine if they are vowels //
    function isVowel(x) {
        if (vowelList.indexOf(x) >= 0) {return true;} else {return false;}
    }

    //checks letters in a string to determine if they are consonants //
    function isConsonant(x) {
        if (consonantList.indexOf(x) >= 0) {return true;} else {return false;}
    }


    let linguisticParse = function(word) {
    let firstName = word;
    let nameCoda = [];
    for (var i = 0; i < firstName.length; i++) {
        if (isVowel(firstName[i])) {
        nameCoda.push("v");
        } else if (isConsonant(firstName[i])) {
        nameCoda.push("c");
        }
    }
    return nameCoda.join("");
    };


    // the variables that will be binded to the state based on the input //
    var txtName = document.getElementById("txtName");

    let inputWord = txtName.value;
    console.log(inputWord)
    let consonantVowelArray = linguisticParse(inputWord);
    let stringParse = consonantVowelArray;

    var pattern;
    var key;

    if (consonantVowelArray.includes(patternOneString)) {
        pattern = patternOneString;
        key = "WXY";
    } else if (consonantVowelArray.includes(patternTwoString)) {
        pattern = patternTwoString
        key = "WXYZ";
    } else if (consonantVowelArray.includes(patternThreeString)) {
        pattern = patternThreeString;
        key = "YZ";
    } else {
        console.log("your name can't be schloppified, sorry (not sorry)")
    }

    function schlopp(nameCoda) {
    return nameCoda.replace(pattern, key);
    }

    let schloppParse = schlopp(consonantVowelArray);

    var inp = inputWord;

    if (pattern.includes(patternOneString)) {
    var codaS = schloppParse;
    var c = codaS.indexOf("W");
    var d = codaS.indexOf("X");
    var e = codaS.indexOf("Y");
    var f = inp.charAt(c);
    var g = inp.charAt(d);
    var h = inp.charAt(e);
    var k = f + g + h;
    } else if (pattern.includes(patternTwoString)) {
    var codaS = schloppParse;
    var c = codaS.indexOf("W");
    var d = codaS.indexOf("X");
    var e = codaS.indexOf("Y");
    var t = codaS.indexOf("Z");
    var f = inp.charAt(c);
    var g = inp.charAt(d);
    var h = inp.charAt(e);
    var u = inp.charAt(t)
    var k = f + g + h + u;
    } else if (pattern.includes(patternThreeString)) {
    var codaS = schloppParse;
    var c = codaS.indexOf("Y");
    var d = codaS.indexOf("Z");
    var f = inp.charAt(c);
    var g = inp.charAt(d);
    var k = f + g;
    }

    var replacement = "schlopp";
    var res = inp.replace(k, key);
    var schloppyDoggo = res.replace(key, replacement)

    console.log(schloppyDoggo);
   
    txtOutput.value = schloppyDoggo

};

