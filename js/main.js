const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

//get all the classes
const work = document.querySelector('#work h2');
const last_work = document.querySelector('#work .lw-1');

const play = document.querySelector('#play h2');
const last_play = document.querySelector('#play .lw-2');

const study = document.querySelector('#study h2');
const last_study = document.querySelector('#study .lw-3');

const exercise = document.querySelector('#exercise h2');
const last_exercise = document.querySelector('#exercise .lw-4');

const social = document.querySelector('#social h2');
const last_social = document.querySelector('#social .lw-5');

const self_care = document.querySelector('#self-care h2');
const last_self_care = document.querySelector('#self-care .lw-6');

const daily = document.querySelector('.nav_daily');
const weekly = document.querySelector('.nav_weekly');
const monthly = document.querySelector('.nav_monthly');

const lw_txt = document.querySelectorAll('.lw-txt');


$(".nav_daily").click(function(){
	$('ul li').removeClass("nav_active");
  $(this).addClass("nav_active");
});
$(".nav_weekly").click(function(){
	$('ul li').removeClass("nav_active");
  $(this).addClass("nav_active");
});
$(".nav_monthly").click(function(){
$('ul li').removeClass("nav_active")
  $(this).addClass("nav_active");
});

$('ul li').click(() => {
	if (daily.classList.contains('nav_active')) {
		data.forEach(chunk => {
			if (chunk.title == 'Work') {
				work.innerHTML = chunk.timeframes.daily.current;
				last_work.innerHTML = chunk.timeframes.daily.previous;
			}
			else if (chunk.title == 'Play') {
				play.innerHTML = chunk.timeframes.daily.current;
				last_play.innerHTML = chunk.timeframes.daily.previous;
			}
			else if (chunk.title == 'Study') {
				study.innerHTML = chunk.timeframes.daily.current;
				last_study.innerHTML = chunk.timeframes.daily.previous;
			}
			else if (chunk.title == 'Exercise') {
				exercise.innerHTML = chunk.timeframes.daily.current;
				last_exercise.innerHTML = chunk.timeframes.daily.previous;
			}
			else if (chunk.title == 'Social') {
				social.innerHTML = chunk.timeframes.daily.current;
				last_social.innerHTML = chunk.timeframes.daily.previous;
			}
			else if (chunk.title == 'Self Care') {
				self_care.innerHTML = chunk.timeframes.daily.current;
				last_self_care.innerHTML = chunk.timeframes.daily.previous;
			}
		})
		lw_txt.forEach(chunk => {
			chunk.innerHTML = 'Yesterday';
		})
	}


	if (weekly.classList.contains('nav_active')) {
		data.forEach(chunk => {
			if (chunk.title == 'Work') {
				work.innerHTML = chunk.timeframes.weekly.current;
				last_work.innerHTML = chunk.timeframes.daily.previous;
			}
			else if (chunk.title == 'Play') {
				play.innerHTML = chunk.timeframes.weekly.current;
				last_play.innerHTML = chunk.timeframes.weekly.previous;
			}
			else if (chunk.title == 'Study') {
				study.innerHTML = chunk.timeframes.weekly.current;
				last_study.innerHTML = chunk.timeframes.weekly.previous;
			}
			else if (chunk.title == 'Exercise') {
				exercise.innerHTML = chunk.timeframes.weekly.current;
				last_exercise.innerHTML = chunk.timeframes.weekly.previous;
			}
			else if (chunk.title == 'Social') {
				social.innerHTML = chunk.timeframes.weekly.current;
				last_social.innerHTML = chunk.timeframes.daily.previous;
			}
			else if (chunk.title == 'Self Care') {
				self_care.innerHTML = chunk.timeframes.weekly.current;
				last_self_care.innerHTML = chunk.timeframes.weekly.previous;
			}
		})
		lw_txt.forEach(chunk => {
			chunk.innerHTML = 'Last week'
		})
	}

if (monthly.classList.contains('nav_active')) {
		data.forEach(chunk => {
			if (chunk.title == 'Work') {
				work.innerHTML = chunk.timeframes.monthly.current;
				last_work.innerHTML = chunk.timeframes.monthly.previous;
			}
			else if (chunk.title == 'Play') {
				play.innerHTML = chunk.timeframes.monthly.current;
				last_play.innerHTML = chunk.timeframes.monthly.previous;
			}
			else if (chunk.title == 'Study') {
				study.innerHTML = chunk.timeframes.monthly.current;
				last_study.innerHTML = chunk.timeframes.monthly.previous;
			}
			else if (chunk.title == 'Exercise') {
				exercise.innerHTML = chunk.timeframes.monthly.current;
				last_exercise.innerHTML = chunk.timeframes.monthly.previous;
			}
			else if (chunk.title == 'Social') {
				social.innerHTML = chunk.timeframes.monthly.current;
				last_social.innerHTML = chunk.timeframes.monthly.previous;
			}
			else if (chunk.title == 'Self Care') {
				self_care.innerHTML = chunk.timeframes.monthly.current;
				last_self_care.innerHTML = chunk.timeframes.monthly.previous;
			}
		})
		lw_txt.forEach(chunk => {
			chunk.innerHTML = 'Last month'
		})
	}

})
weekly.click();

