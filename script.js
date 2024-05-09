function handleRangeInputs() {
    'use strict';

    var rangeControlList = document.getElementsByClassName('custom-rangeInput');
    var growthCard = document.querySelector('.packages.growth-card');
    var customCard = document.querySelector('.packages.custom-card');
    var growthButton = growthCard.querySelector('.button');
    var customButton = document.querySelector('.custom-card .button');

    function init() {
        
        for (var i = 0; i < rangeControlList.length; i++) {
            
            rangeControlList[i].value = 125;

         
            updateController(rangeControlList[i]);

            rangeControlList[i].addEventListener('input', function () {
                updateController(this);
            });

            rangeControlList[i].addEventListener('change', function () {
                updateController(this);
            });
        }
    }

    function update() {
        for (var i = 0; i < rangeControlList.length; i++) {
            updateController(rangeControlList[i]);
        }
    }

    function updateController(obj) {
     
        var thumbPos = getThumbPercentage(obj);
        var thumPosPX = getThumbPosition(obj);
        if (obj.getAttribute("data-tooltip") != "false") {
            updateTooltip(obj.nextElementSibling, obj.value, thumPosPX, thumbPos);
        } else {
            obj.nextElementSibling.style.display = "none";
        }
        updateProgress(obj, '#9c9e9f', 'black', thumbPos);
        updateCardColors(obj.value);
    }

    function getThumbPosition(obj) {
        return Math.round((obj.offsetWidth / (obj.getAttribute("max") - obj.getAttribute("min"))) * (obj.value - obj.getAttribute("min"))); // Pixel
    }

    function getThumbPercentage(obj) {
        return Math.round(100 * (obj.value - obj.getAttribute("min")) / (obj.getAttribute("max") - obj.getAttribute("min"))); // Percentage
    }

    function updateTooltip(obj, text, position, percentage) {
        obj.innerHTML = text; 
        obj.style.left = position + 'px'; 

       
        obj.style.transform = 'translate(-50%, -30px)';
    }

    
    function updateProgress(obj, progressBgColor, progressFillColor, percentage) {
        var rangeBg = 'linear-gradient(to right,  ' + progressFillColor + ' 0%, ' + progressFillColor + ' ' + percentage + '%, ' + progressBgColor + ' ' + percentage + '%, ' + progressBgColor + ' 100%)';
        var cssRule = '#' + obj.id + '::-webkit-slider-runnable-track { background : ' + rangeBg + ' } ';
        cssRule += '#' + obj.id + '::-moz-range-track { background : ' + rangeBg + ' } ';
        cssRule += '#' + obj.id + '::-ms-track { background : ' + rangeBg + ' } ';

      
        var applyStyle = function (styleName, cssText) {
            var styleElement = document.getElementById(styleName);
            if (styleElement) document.getElementsByTagName('head')[0].removeChild(styleElement);

            styleElement = document.createElement('style');
            styleElement.type = 'text/css';
            styleElement.id = styleName;
            styleElement.innerHTML = cssText;
            document.getElementsByTagName('head')[0].appendChild(styleElement);
        };

        applyStyle('range_' + obj.id, cssRule);
    }

   
    function updateCardColors(value) {
        if (value >= 130) {
            growthCard.classList.remove('growth-card');
            growthCard.classList.add('white-theme');
            customCard.classList.add('black-theme');
            customButton.style.backgroundColor = '#b7f564';
            growthButton.style.backgroundColor = 'lightgrey';
        } else {
            growthCard.classList.remove('white-theme');
            growthCard.classList.add('growth-card');
            customCard.classList.remove('black-theme');
            growthButton.style.backgroundColor = '#b7f564';
            customButton.style.backgroundColor = 'lightgrey';

        }
    }


    var fireOnceOnResize;
    window.addEventListener('resize', function () {
        fireOnceOnResize = setTimeout(update, 100);
    });

    
    init();
}

handleRangeInputs();






var rangeInput = document.getElementById('range-slider1');


var sliderValueSpan = document.getElementById('sliderValue');


rangeInput.addEventListener('input', function() {
  sliderValueSpan.textContent = this.value; 
});

document.addEventListener("DOMContentLoaded", function() {
    const priceDisplay = document.querySelector(".custom-card .text1");
    const discountedPriceDisplay = document.querySelector(".custom-card .text2");
    const dropdown = document.getElementById("minutes-dropdown");

    dropdown.addEventListener("change", function() {
        const selectedOption = parseInt(dropdown.value);
        let price = 80; 
        let discountedPrice = 100; 

        if (selectedOption === 120) {
            price = 150;
            discountedPrice = 250;
        } 
        else if (selectedOption === 230) {
            price = 250;
            discountedPrice = 350;
        }

      
        priceDisplay.textContent = `USD ${price} /month`;
        discountedPriceDisplay.textContent = `USD ${discountedPrice} /month`;
    });
});

function check() {
    var checkBox = document.getElementById("monthly");
    var text1 = document.querySelectorAll(".text1");
    var text2 = document.querySelectorAll(".text2");

    for (var i = 0; i < text1.length; i++) {
        if (checkBox.checked) {
            text1[i].style.display = "block";
            text2[i].style.display = "none";
        } else {
            text1[i].style.display = "none";
            text2[i].style.display = "block";
        }
    }
}


document.querySelectorAll('input[name="switch"]').forEach(function(input) {
    input.addEventListener('change', function() {
        check();
    });
});


check();
document.addEventListener("DOMContentLoaded", function() {
    const dropdownButtons = document.querySelectorAll(".dropdown .dropbtn");
    const toggleTables = document.querySelectorAll(".table-hidden");
  
    dropdownButtons.forEach(function(button, index) {
      button.addEventListener("click", function() {
        toggleTables[index].classList.toggle("table-hidden");
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.toggle');
    const hiddenTables = document.querySelectorAll('.hidden');

    toggleButton.addEventListener('click', function() {
        console.log("clicked")
      hiddenTables.forEach(table => {
        table.classList.toggle('hidden'); 
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-btn');

    toggleButton.addEventListener('click', function() {
        toggleButton.classList.toggle('toggled');
    });
});
function toggle() {
    var squares = document.querySelectorAll('.square');
    squares.forEach(function(square) {
        square.classList.toggle('toggle-down');
        square.classList.toggle('toggle-up');
    });
}
toggle();



  
  
