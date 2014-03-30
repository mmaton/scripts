(function() {
  var $animate, $container, $message, $paragraph, MESSAGES, animate, initialise, scramble;
	MESSAGES = [];
	
	MESSAGES.push({
	delay: 100,
	text: line1
	});
	
	MESSAGES.push({
	delay: 300,
	text: line2
	});
	
	MESSAGES.push({
	delay: 500,
	text: line3
	});
	
	MESSAGES.push({
	delay: 700,
	text: line4
	});
	
	MESSAGES.push({
	delay: 900,
	text: line5
	});
	
	MESSAGES.push({
	delay: 1100,
	text: line6
	});

	MESSAGES.push({
	delay: 1300,
	text: line7
	});
	
	MESSAGES.push({
	delay: 1500,
	text: line8
	});

	MESSAGES.push({
	delay: 1700,
	text: line9
	});

  $container = $("#container");

  $message = $("#message");

  $animate = $("#animate");

  $paragraph = null;

  scramble = function(element, text, options) {
    var $element, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts, glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches, i, letter, object, order, output, parameters, settings, shuffle, target, textCharacters, textLength, wrap, _i, _j, _results;
    defaults = {
      probability: 0.2,
      glitches: '-|/\\',
      blank: '',
      duration: text.length * 40,
      ease: 'easeInOutQuad',
      delay: 0.0
    };
    $element = $(element);
    settings = $.extend(defaults, options);
    shuffle = function() {
      if (Math.random() < 0.5) {
        return 1;
      } else {
        return -1;
      }
    };
    wrap = function(text, classes) {
      return "<span class=\"" + classes + "\">" + text + "</span>";
    };
    glitchText = settings.glitches;
    glitchCharacters = glitchText.split('');
    glitchLength = glitchCharacters.length;
    glitchProbability = settings.probability;
    glitches = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = glitchCharacters.length; _i < _len; _i++) {
        letter = glitchCharacters[_i];
        _results.push(wrap(letter, 'glitch'));
      }
      return _results;
    })();
    ghostText = $element.text();
    ghostCharacters = ghostText.split('');
    ghostLength = ghostCharacters.length;
    ghosts = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = ghostCharacters.length; _i < _len; _i++) {
        letter = ghostCharacters[_i];
        _results.push(wrap(letter, 'ghost'));
      }
      return _results;
    })();
    textCharacters = text.split('');
    textLength = textCharacters.length;
    order = (function() {
      _results = [];
      for (var _i = 0; 0 <= textLength ? _i < textLength : _i > textLength; 0 <= textLength ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this).sort(this.shuffle);
    output = [];
    for (i = _j = 0; 0 <= textLength ? _j < textLength : _j > textLength; i = 0 <= textLength ? ++_j : --_j) {
      glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
      glitchCharacter = glitches[glitchIndex];
      ghostCharacter = ghosts[i] || settings.blank;
      addGlitch = Math.random() < glitchProbability;
      character = addGlitch ? glitchCharacter : ghostCharacter;
      output.push(character);
    }
    object = {
      value: 0
    };
    target = {
      value: 1
    };
    parameters = {
      duration: settings.duration,
      ease: settings.ease,
      step: function() {
        var index, progress, _k;
        progress = Math.floor(object.value * (textLength - 1));
        for (i = _k = 0; 0 <= progress ? _k <= progress : _k >= progress; i = 0 <= progress ? ++_k : --_k) {
          index = order[i];
          output[index] = textCharacters[index];
        }
        return $element.html(output.join(''));
      },
      complete: function() {
        return $element.html(text);
      }
    };
    return $(object).delay(settings.delay).animate(target, parameters);
  };

  animate = function() {
    var data, element, index, options, _i, _len;
    for (index = _i = 0, _len = MESSAGES.length; _i < _len; index = ++_i) {
      data = MESSAGES[index];
      element = $paragraph.get(index);
      element.innerText = '';
      options = {
        delay: data.delay
      };
      scramble(element, data.text, options);
    }
  };

  initialise = function() {
    var index, text, _i, _len;
    $animate.click(animate);
    for (index = _i = 0, _len = MESSAGES.length; _i < _len; index = ++_i) {
      text = MESSAGES[index];
      $message.append("<p>");
    }
    $paragraph = $container.find("p");
    animate();
  };

  initialise();

}).call(this);
