/* Global JS */


/**
 * Detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
var detectIE = function () {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
};

var is_IE = detectIE();

if (is_IE) {
	$(document).ready(function () {
		$('body').addClass('is-ie ie-' + is_IE);
	});
}


/**
 * Open external links in new tabs/windows
 */
$(document).ready(function () {
	initExternalLinks();

});


var initExternalLinks = function () {
	$('a').each(function () {
		var a = new RegExp('/' + window.location.host + '/');

		if (!a.test(this.href)) {
			$(this).attr('target', '_blank');
		}
	});
}

// ************************************************************************************
$(document).ready(function () {
	// hide elements for tablets and mobail devices
	// classes:
	// parent: "num-show-card"
	// parent attribute: "data-num- + breakpoints"

	var cardContainer = $('.num-show-card');
	var cardItem;

	function hideCard(el) {

		cardItem = $("> div", el);

		var attrName;
		var attrDataVal;
		var breakpoints;

		function showCountElemensts(breakpoints, attrName) {
			attrDataVal = el.attr(attrName);

			if (attrDataVal > 0) {

				cardItem.each(function (index) {

					if (index + 1 > attrDataVal) {

						if ($(this).hasClass('d-none') || $(this).hasClass('d-sm-none') || $(this).hasClass('d-md-none') || $(this).hasClass('d-lg-none')) {

							return;

						} else {

							$(this).addClass("d-none d-" + breakpoints + "-block");

						}

					}
				});

			} else {
				$(this).addClass("d-" + breakpoints + "-none");
			}
		}
	

		if (window.matchMedia('(max-width: 575px)').matches && el.attr('data-num-sm') >= 0) {

			breakpoints = "sm"
			attrName = "data-num-" + breakpoints;

			showCountElemensts(breakpoints, attrName);


		} else if (window.matchMedia('(max-width: 767px)').matches  && el.attr('data-num-md') >= 0) {

			breakpoints = "md"
			attrName = "data-num-" + breakpoints;

			showCountElemensts(breakpoints, attrName);

		} else if (window.matchMedia('(max-width: 991px)').matches && el.attr('data-num-lg') >= 0) {

			breakpoints = "lg"
			attrName = "data-num-" + breakpoints;

			showCountElemensts(breakpoints, attrName);

		} else {

			attrName = "data-num";

			showCountElemensts(breakpoints, attrName);
		}



	}

	//move items for tablets and mobile devices

	var containerDynamicPosition = $('.container-dynamic-position');

	function controlPosition(element, attrName) {

		var items = $('> div', element);
		var attrDataPos;
		var numPos;

		attrDataPos = $('[' + attrName + ']', element);

		attrDataPos.each(function (index, el) {

			numPos = $(el).attr(attrName);

			if (numPos > 0) {

				$(el).appendTo($(el).parent());

				items = $('> div', element);

				items[numPos - 1].before(el);

				$(el).removeClass('d-none');

			} else {

				$(el).addClass('d-none');

			}
		});

	}

	function resizePosition() {

		if (containerDynamicPosition.length > 0) {

			containerDynamicPosition.each(function (index, element) {

				var attrName;

				if (window.matchMedia('(max-width: 575px)').matches) {

					attrName = 'data-pos-sm';

					controlPosition(element, attrName);

				} else if (window.matchMedia('(max-width: 767px)').matches) {

					attrName = 'data-pos-md';

					controlPosition(element, attrName);

				} else if (window.matchMedia('(max-width: 991px)').matches) {

					attrName = 'data-pos-lg';

					controlPosition(element, attrName);

				} else {

					attrName = 'data-pos';

					controlPosition(element, attrName);

				}

			});

		}

	}

	resizePosition();

	if (cardContainer.length > 0) {

		cardContainer.each(function (index, el) {

			hideCard($(el));
			resizePosition();

		});

	}

	$(window).resize(function (el) {

		resizePosition();
		hideCard($(el));
		
	});

	// The icon-heart animation

	$('.icon-heart i').click(function () {
        $(this).toggleClass('visited');
    });

});

var bs4Overlay = function () {
	return;
	// $('body').append('<div id="bs4_overlay"></div><div id="bs4_toggle"><span class="toggle">Toggle Grid</span><span class="close">(Hide)</span></div>');

	// var doc_height = $(document).height(),
	// 	bs4_overlay = $('#bs4_overlay'),
	// 	bs4_toggle = $('#bs4_toggle');

	// bs4_overlay.height(doc_height).append('<div class="container"><div class="row"><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div><div class="col-sm-1"><i></i></div></div></div>');
	// bs4_overlay.find('i').height(doc_height);

	// bs4_toggle.on('click', '.toggle', function (event) {
	// 	event.preventDefault();
	// 	bs4_overlay.toggleClass('active');
	// });

	// bs4_toggle.on('click', '.close', function (event) {
	// 	event.preventDefault();
	// 	bs4_toggle.addClass('hidden');
	// });
}();


'use strict';

/**
 *  This is the main file for ag-alert-popap-cookies
 */

if ($('.component-ag-alert-popap-cookies').length) {
    $(function() {
        initAgAlertPopapCookies();
    });
}

function initAgAlertPopapCookies() {
    console.log('Initializing AgAlertPopapCookies');

    var popap = $('.component-ag-alert-popap-cookies');

    $('.popap-btn-close').click(function () {
        popap.slideUp(300);
    })
}

'use strict';

/**
 *  This is the main file for ag-banner-fifty
 */
 
if ($('.component-ag-banner-fifty').length) {
    $(function() {
        initAgBannerFifty();
    });
}

function initAgBannerFifty() {
    console.log('Initializing AgBannerFifty');
}

'use strict';

/**
 *  This is the main file for ag-card-ad-page
 */

if ($('.component-ag-card-ad-page').length) {
    $(function() {
        initAgCardAdPage();
    });
}

function initAgCardAdPage() {
    console.log('Initializing AgCardAdPage');
}



'use strict';

/**
 *  This is the main file for ag-card-gallery
 */

if ($('.component-ag-card-gallery').length) {
    $(function() {
        initAgCardGallery();
    });
}

function initAgCardGallery() {
    console.log('Initializing AgCardGallery');
}

'use strict';

/**
 *  This is the main file for ag-card-browse-topic
 */

if ($('.component-ag-card-browse-topic').length) {
    $(function () {
        initAgCardBrowseTopic();
    });
}

function initAgCardBrowseTopic() {
    console.log('Initializing AgCardBrowseTopic');

}

'use strict';

/**
 *  This is the main file for ag-card-video
 */
 
if ($('.component-ag-card-video').length) {
    $(function() {
        initAgCardVideo();
    });
}

function initAgCardVideo() {
    console.log('Initializing AgCardVideo');
}

'use strict';

/**
 *  This is the main file for ag-dropdown
 */

if ($('.component-ag-dropdown').length) {
    $(function () {
        initAgDropdown();
    });
}

function initAgDropdown() {
    console.log('Initializing AgDropdown');

    var dropdown = $('.sort');
    var btn = $('.sort .dropdown-toggle');
    var dropdownItem = $('.dropdown-v1 .dropdown-item');
    var dropdownItemActive = $(dropdownItem[0]).addClass('active');

    function btnValue() {
        var dropdownItemText = $('.dropdown-v1 .dropdown-item.active').text();
        btn.text(dropdownItemText);
    }

    dropdownItem.click(function (e) {
        e.preventDefault();

        if (!$(this).hasClass('active')) {
            
            dropdownItem.removeClass('active');
            $(this).addClass('active');

            btnValue();

        }

    });
    // dropdownItem[0].addClass('active');

}

'use strict';

/**
 *  This is the main file for ag-form-newsletter
 */
 
if ($('.component-ag-form-newsletter').length) {
    $(function() {
        initAgFormNewsletter();
    });
}

function initAgFormNewsletter() {
    console.log('Initializing AgFormNewsletter');

    // Set height for message
    
    var form = $('.signup form');
    var formHeight =  $('.form-signup').height();
    var message = $('.message-form-submit');

    message.height(formHeight).hide();

    form.submit(function (e) { 
        $('.form-signup').hide();
        message.show();
        e.preventDefault();
        
    });

}

'use strict';

/**
 *  This is the main file for ag-filter
 */

if ($('.component-ag-filter').length) {
    $(function () {
        initAgFilter();
    });
}

function initAgFilter() {
    console.log('Initializing AgFilter');

    var filterItemsContainer = $('.items-container');
    var inputsCheckbox = $('input[type="checkbox"]');
    var inputsAllData = [];
    var category = [];
    var uniq = [];

    function setBodyCategory() {

        filterItemsContainer.empty();

        inputsCheckbox.each(function (index, element) {
            var el = $(this);

            category.push(el.attr('data-category'));

            uniq = [...new Set(category)];

        });

        for (var i = 0; i < uniq.length; i++) {
            var categoryName = uniq[i];

            var headerItem = $('<div class="header header-item header-dropdown" data-header-category="' + categoryName + '">' + categoryName + '</div>');

            headerItem.appendTo(filterItemsContainer);

            var bodyItem = $('<div class="body body-item body-dropdown" data-body-category="' + categoryName + '"></div>');

            bodyItem.appendTo(filterItemsContainer);

            for (var j = 0; j < inputsCheckbox.length; j++) {
                var el = inputsCheckbox[j];
                var inputCategory = $(el).attr('data-category');
                var value = $(el).val();

                if (inputCategory == categoryName) {

                    var label = $('<label class="component-ag-filter ag-filter-checkbox category-item" for="c_' + i + '_' + j + '" data-label-category="' + categoryName + '"><input type="checkbox" id="c_' + i + '_' + j + '" value="' + value + '" data-category="' + categoryName + '"><span></span>' + value + '</label > ');

                    label.appendTo(bodyItem);
                }

            }
        }
    }
    setBodyCategory();

    var headerDropdown = $('.header-dropdown');
    var headerItem = $('.header-item');
    var itemsContainer = $('.items-container');
    var itemsContainerHeight;
    var itemCurrentBodyHeight;

    var filterSelected = $('.filter-selected');
    var filterSelectedMarker = $('.filter-selected .marker-insert');
    var filterSelectedMarkerMob = $('.filter-selected-mob .marker-insert');
    var arrCheckbox = $('.search-filter input[type="checkbox"]');
    var arrCheckboxChecked = $('.search-filter input[type="checkbox"]:checked');
    var filterInputLocation = $('.form-location');

    var findProFilterLocation = $('.find-pro-filter .location-result-data');

    function inputSelectedReset() {
        arrCheckbox.prop('checked', false);
        arrCheckboxChecked = [];
    }

    function filterResultReset() {
        filterSelected.children('.filter-selected-item').remove();
    }

    //reset input location
    function filterLocationReset() {
        filterInputLocation.val('');
    }

    //Find Pro page. Reset result location

    function locationResultReset() {

        var findProFilterLocationPrefix = $('.find-pro-filter .location-prefix');
        var findProFilterLocationResult = $('.find-pro-filter .location-result');

        if (filterInputLocation.val()) {
            findProFilterLocationResult.addClass('d-inline-block').removeClass('d-none');
            findProFilterLocationPrefix.addClass('d-inline-block').removeClass('d-none');
        } else {
            findProFilterLocationPrefix.addClass('d-none').removeClass('d-inline-block');
            findProFilterLocationResult.addClass('d-none').removeClass('d-inline-block');
        }

        findProFilterLocation.empty();
    }

    function fullFilterReset() {
        inputSelectedReset();
        filterResultReset();
        filterLocationReset();
    }


    /*Open filter box*/
    $('.dropdown-filter').click(searchFilterOpen);

    /*Close filter box*/
    $('.btn-close').click(
        function () {
            searchFilterOpen(false);
        });

    $('.btn-clear').click(
        function () {
            dropdownFiltered(false);
            fullFilterReset();
        });

    $('.btn-clear-location').click(
        function () {
            filterLocationReset();
        });

    //=====================block filter selected================

    function arrSelected(e) {

        e.preventDefault();

        if (this.checked) {
            arrCheckboxChecked.push(e.target);
        } else {
            arrCheckboxChecked = arrCheckboxChecked.filter(function (el) {

                if (el != e.target) {
                    return true;
                } else {
                    return false;
                }

            })
        }

    }

    //change input-checkbox
    arrCheckbox.change(arrSelected);

    //change input-location
    filterInputLocation.keyup(function (e) {
        filterInputLocation.val($(this).val());
    });

    //close selected item
    function selectedItemClose() {
        $('.item-close').click(function (e) {
            e.preventDefault();

            var dataAttId = $(this).attr("data-input-id");

            var inputId = $('#' + dataAttId);

            inputId.prop('checked', false);

            if (inputId.attr('type') === 'text') {
                inputId.val('');
            }

            $(this).parent('.filter-selected-item').remove();

            arrSelected({ target: document.getElementById(dataAttId), preventDefault: function () { } });

            if (arrCheckboxChecked.length < 1) {
                dropdownFiltered(false);
            }

        });

    }

    //button apply

    $('.btn-bottom-container .btn-apply, .btn-apply-location, .mob-btn-apply').click(function (e) {
        e.preventDefault();

        filterResultReset();

        locationResultReset();

        if (arrCheckboxChecked.length > 0 || filterInputLocation.val()) {


            var insertFilterResult = window.matchMedia('(min-width: 768px)').matches ? filterSelectedMarker : filterSelectedMarkerMob;

            for (var i = 0; i < arrCheckboxChecked.length; i++) {

                var el = arrCheckboxChecked[i];

                var filterSelectedItem = $('<div class="filter-selected-item"><span class="item-text">' + el.value + '</span><span class="item-close" data-input-id="' + el.id + '"></span></div>');

                filterSelectedItem.insertBefore(insertFilterResult);

            }

            if (filterInputLocation.val()) {

                var filterSelectedItemLocation = $('<div class="filter-selected-item filter-selected-item-location"><span class="item-text">' + filterInputLocation.val() + '</span><span class="item-close" data-input-id="' + filterInputLocation.attr('id') + '"></span></div>');

                filterSelectedItemLocation.insertBefore(insertFilterResult);

                // for find-pro page
                if (findProFilterLocation.length > 0) {

                    var filterLocationVal = filterInputLocation.val();

                    findProFilterLocation.text(filterLocationVal);

                }

            }

            if (window.matchMedia('(min-width: 768px)').matches) {
                searchFilterOpen(false);
                dropdownFiltered(true);
            }

            selectedItemClose();

        } else {
            dropdownFiltered(false);
        }
    });

    filterInputLocation.keypress(function (e) {
        if (e.which == 13) {

            $('.btn-bottom-container .btn-apply').trigger('click');

        }
    });

    // function locationSearchPopap() {
    //     $('.location-search-popap').toggleClass('d-none d-inline-block');
    //     $('.location-result-data').toggleClass('open-popap');
    // }


    locationSearchPopap(false);

    function locationSearchPopap(open) {

        if (open) {
            $('.location-search-popap').addClass('d-inline-block').removeClass('d-none');
            $('.location-result-data').addClass('open-popap');
        } else {
            $('.location-search-popap').addClass('d-none').removeClass('d-inline-block');
            $('.location-result-data').removeClass('open-popap');
        }
    }

    /*Open popap location search*/
    $('.location-result-data').click(function () {

        $('.search-filter-container').hasClass('open') ? locationSearchPopap(false) : locationSearchPopap(true);

    });

    function searchFilterOpen(st) {

        locationSearchPopap(false);

        $('.search-filter-container').addClass('d-block open').removeClass('d-none');
        event.preventDefault();

        if (!st) {
            $('.search-filter-container').removeClass('d-block open').addClass('d-none');
            $('.dropdown-toggle.active').removeClass('active');
            event.preventDefault();
        }
    }

    function dropdownFiltered(state) {

        if (arrCheckboxChecked.length > 0) {
            $('.dropdown-filter .all-pros').addClass('d-none').removeClass('d-inline-block');
            $('.dropdown-filter .pros').addClass('d-inline-block').removeClass('d-none');
        } else {
            $('.dropdown-filter .all-pros').addClass('d-inline-block').removeClass('d-none');
            $('.dropdown-filter .pros').addClass('d-none').removeClass('d-inline-block');
        }

        if (state) {
            $('.dropdown-filtered').removeClass('d-none').addClass('d-md-block');
            $('.dropdown-filter-box-default').removeClass('d-md-block').addClass('d-md-none');
        } else {
            $('.dropdown-filtered').removeClass('d-md-block').addClass('d-none');
            $('.dropdown-filter-box-default').addClass('d-md-block').removeClass('d-md-none');
        }
    }

    // slideDown/slideUp the filters for mobiles devices

    function hangState() {
        headerDropdown.each(function (index, element) {
            if (window.matchMedia('(max-width: 767px)').matches) {

                if (!$(element).hasClass('active')) {
                    $(element).next('.body').slideUp(250);
                } else {
                    $(element).next('.body').slideDown(250);
                }

            } else if (window.matchMedia('(min-width: 768px)').matches && headerDropdown.hasClass('header-item')) {

                if (!$(element).hasClass('active')) {
                    $(element).next('.body-item').slideUp(250);
                } else {

                    itemsContainerHeight = itemsContainer.height();

                    itemCurrentBodyHeight = $(element).next('.body-item').height();

                    if (itemsContainerHeight < itemCurrentBodyHeight) {

                        itemsContainer.animate({ height: itemCurrentBodyHeight }, 50);

                    } else {

                        itemsContainer.animate({ height: '100%' }, 50);

                    }

                    $(element).next('.body-item').slideDown(250);

                }

            } else {

                $(element).next('.body').slideDown(0);

            }

        });

    }

    function hangClick() {
        $("body").on("click", ".header-dropdown", function (e) {

            if (window.matchMedia('(min-width: 768px)').matches && headerDropdown.hasClass('header-item')) {
                headerItem.removeClass('active');
                $(this).addClass('active');

            } else {
                $(this).toggleClass('active');
            }

            hangState();
        });
    }


    hangState();
    hangClick();

    $(window).resize(function () {
        hangState();
    });

  if (arrCheckboxChecked.length > 0) {
    dropdownFiltered(true);
    selectedItemClose();
  }
}

'use strict';

/**
 *  This is the main file for ag-forms
 */

if ($('.component-ag-forms').length) {
    $(function () {
        initAgForms();
    });
}

function initAgForms() {
    console.log('Initializing AgForms');

    var x, i, j, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < selElmnt.length; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        /* A function that will close all select boxes in the document,
        except the current select box: */
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

	/* If the user clicks anywhere outside the select box,
	then close all select boxes: */
    document.addEventListener("click", closeAllSelect);

    $('.component-modal').find('#promo-code-dialog').on('click', function () {
        $(this).slideUp('300', function () {
            $('.component-modal').find('#promo-code').slideDown();
        });
    });


    // // Move modal to end of page and form validation

    var modalTime = setInterval(function () {
        
        var agModal = $(".component-ag-modal");

        if (agModal.length > 0) {

            // Move modal to end of page
            $('body').append(agModal);


            $('.submit').click(function (event) {

                (function () {

                    var modalForms = $('.ag-modal-forms');
                    var forms = $('.needs-validation');

                    //Form validation

                    var validation = Array.prototype.filter.call(forms, function (form) {
                        form.addEventListener('submit', function (event) {

                            if (form.checkValidity() === false) {

                                event.preventDefault();
                                event.stopPropagation();
                                form.classList.add('was-validated');

                                //If form was not validation - scrolling top
                                modalForms.animate({ scrollTop: 0 })

                            } else {
                                form.classList.remove('was-validated');
                                event.preventDefault();
                                grecaptcha.execute();

                                onCompleted = function (token) {
                                    console.log('captcha completed.');
                                    console.log(token);
                                    $('.form-recapcha').submit();
                                }
                            }

                        }, false);

                    });

                })();

            });

            clearInterval(modalTime);
        }
    }, 500);




    // Datepicker for forms
    $('#datepicker').datepicker({
        showOtherMonths: true,
        format: 'yyyy-dd-mm',

        minDate: function () {
            var d = new Date();
            return d.setDate(d.getDate() - 1);
        }
    });

}

'use strict';

/**
 *  This is the main file for ag-modal
 */
 
if ($('.component-ag-modal').length) {
    $(function() {
        initAgModal();
    });
}

function initAgModal() {
    console.log('Initializing AgModal');
}

'use strict';

/**
 *  This is the main file for ag-global-footer-tmp
 */
 
if ($('.component-ag-global-footer-tmp').length) {
    $(function() {
        initAgGlobalFooterTmp();
    });
}

function initAgGlobalFooterTmp() {
    console.log('Initializing AgGlobalFooterTmp');
}

'use strict';

/**
 *  This is the main file for ag-page-contact-us-tmp
 */
 
if ($('.component-ag-page-contact-us-tmp').length) {
    $(function() {
        initAgPageContactUsTmp();
    });
}

function initAgPageContactUsTmp() {
    console.log('Initializing AgPageContactUsTmp');
}

'use strict';

/**
 *  This is the main file for ag-page-gallery-tmp
 */

if ($('.component-ag-page-gallery-tmp').length) {
    $(function () {
        initAgPageGalleryTmp();
    });
}

function initAgPageGalleryTmp() {
    console.log('Initializing AgPageGalleryTmp');
}

'use strict';

/**
 *  This is the main file for ag-page-find-pro-lp-tmp
 */

if ($('.component-ag-page-find-pro-lp-tmp').length) {
  $(function () {
    initAgPageFindProLpTmp();
  });
}

function initAgPageFindProLpTmp() {
  console.log('Initializing AgPageFindProLpTmp');

  var urlParameters = location.search.replace('?', '').split('&').reduce(
    function (s, c) {
      var t = c.split('=');
      s[t[0]] = t[1];
      return s;
    }, {}
  );

  if ($('#edit-category').length > 0) {
    $('#edit-category').find('option').each(function () {
      if ($(this).val() > 0) {
        $('ul.category-items-box').append(
          "<li><a href='' rel='" + $(this).val() + "' class='category-item'>" + $(this).text() + "</a></li>"
        );
      }

      if (urlParameters.category && urlParameters.category == $(this).val()) {
        $('#dropdownMenuLink').text($(this).text());
        $('#dropdownMenuLink').attr('rel', $(this).val());
      }
    });
  }

  if (urlParameters.serving) {
    $('#proSearchInput').val(urlParameters.serving);
  }

  $('#proSearchButton').click(function (event) {
    var path = window.location.origin + window.location.pathname;
    var params = [];
    if ($('#dropdownMenuLink').attr('rel') > 0) {
      params.push('category=' + $('#dropdownMenuLink').attr('rel'));
    }
    if ($('#proSearchInput').val()) {
      params.push('serving=' + $('#proSearchInput').val());
    }
    if (params.length > 0) {
      path = path + '?' + params.join('&');
    }
    window.location.href = path;
  });

  $('.category-item').click(function (event) {
    event.preventDefault();

    $('#dropdownMenuLink').text($(this).text());
    $('#dropdownMenuLink').attr('rel', $(this).attr('rel'));
  });
}

'use strict';

/**
 *  This is the main file for ag-page-gallery-photo-lightbox-tmp
 */

if ($('.component-ag-page-gallery-photo-lightbox-tmp').length) {
    $(function () {
        initAgPageGalleryPhotoLightboxTmp();
    });
}

function initAgPageGalleryPhotoLightboxTmp() {
    console.log('Initializing AgPageGalleryPhotoLightboxTmp');

    var storyContainer = $('.story-container');
    var storyContainerBtnClose = $('.story-container .btn-close');
    var storyContainerState = true;

    function storyContainerClose(e) {
        e.preventDefault();
        storyContainer.slideUp();
        storyContainerState = false;
    }

    function storyContainerOpen(e) {
        if (!storyContainerState) {
            e.preventDefault();
            storyContainer.slideDown();
            storyContainerState = true;
        }
    }

    storyContainerBtnClose.click(storyContainerClose);

    $('h2').click(storyContainerOpen);

}

'use strict';

/**
 *  This is the main file for ag-page-home-tmp
 */

if ($('.component-ag-page-home-tmp').length) {
    initAgHomeTmp();
    // $(function () {
    //     

    //     var cardInspiration = $('.inspiration .mob-hide-card > div');
    //     var cardTips = $('.tips .mob-hide-card > div');

    //     cardInspiration.each(function (index) {
    //         if (index > 2) {
    //             $(this).addClass('d-none d-md-flex')
    //         }
    //     });

    //     cardTips.each(function (index) {
    //         if (index > 2) {
    //             $(this).addClass('d-none d-md-flex')
    //         }
    //     });
    // });
}

function initAgHomeTmp() {
    console.log('Initializing AgHomeTmp');

    // carusel options

    function dynamicSize() {
        var cardHeight = $('.dynamic-size-content .component-ag-card-ad-page').height();

        $('.dynamic-size-content .dynamic-height .half').height(cardHeight).css("minHeight", "auto");
    }

    $(window).resize(function () {
        dynamicSize();
    });

    dynamicSize();
}

// function findProPosition () {
//     let findProHeight = $('.find-pro').height();
//     let findProMargin = "-" + (findProHeight / 3) + "px";

//     $('.find-pro').css({ 'marginTop': findProMargin });
// };

// $( window ).resize(findProPosition);

// findProPosition();

'use strict';

/**
 *  This is the main file for ag-page-inspiration-story-gallery-tmp
 */
 
if ($('.component-ag-page-inspiration-story-gallery-tmp').length) {
    $(function() {
        initAgPageInspirationStoryGalleryTmp();
    });
}

function initAgPageInspirationStoryGalleryTmp() {
    console.log('Initializing AgPageInspirationStoryGalleryTmp');
}

'use strict';

/**
 *  This is the main file for ag-page-inspiration-landing-tmp
 */

if ($('.component-ag-page-inspiration-landing-tmp').length) {
    $(function () {
        initAgPageInspirationLandingTmp();
    });
}

function initAgPageInspirationLandingTmp() {
    console.log('Initializing AgPageInspirationLandingTmp');

  var params = [];
  var urlParameters = [];
  window.location.search.replace('?', '').split('&').reduce(
    function (s, c) {
      var filterData = [];
      var t = c.split('=');
      var filterName = t[0].replace('[]%20', '');
      filterData[filterName] = t[1];

      urlParameters.push(filterData);
    }, {}
  );

console.log(urlParameters);
  if ($('#edit-field-inspiration-category-target-id').length > 0) {
    var counter = 0;
    var imgCounter = 1;
    $('#edit-field-inspiration-category-target-id').find('option').each(function () {
      counter++;

      if ($(this).val() > 0) {
        $('.body.inspiration-category').append(
          "<label class='component-ag-filter ag-filter-img-checkbox ag-filter-checkbox category-item' for='c-img-0" + counter + "' data-category='field_inspiration_category_target_id' data-label-category='@@data-category' data-category-id='" + $(this).val() + "'>"
          +"<div class='image'>"
          +"<img class='img-responsive img-fullwidth' src='/themes/custom/aisleplanner/images/inspiration_lp/img_0" + imgCounter + ".png'>"
          +"</div>"
          +"<input type='checkbox' id='c-img-0" + counter + "' value=" + $(this).text() + " data-category='@@data-category'>"
          +"<span></span>"
          + $(this).text()
        +"</label>"
        );
      }

      imgCounter = 6;
    });
  }

  if ($('#edit-field-styles-target-id').length > 0) {
    var counter = 0;
    $('#edit-field-styles-target-id').find('option').each(function () {
      counter++;
      if ($(this).val() > 0) {
        $('.category-items-box.style').append(
          "<label class='component-ag-filter ag-filter-checkbox category-item' for='c" + counter + "' data-category='field_styles_target_id' data-label-category='@@data-category' data-category-id='" + $(this).val() + "'>"
            +"<input type='checkbox' id='c" + counter + "' value=" + $(this).text() + " data-category='@@data-category'>"
            +"<span></span>"
            + $(this).text()
          +"</label>"
        );
      }
    });
  }

  if ($('#edit-field-venue-target-id').length > 0) {
    var counter = 0;
    $('#edit-field-venue-target-id').find('option').each(function () {
      counter++;
      if ($(this).val() > 0) {
        $('.category-items-box.venue').append(
          "<label class='component-ag-filter ag-filter-checkbox category-item' for='v" + counter + "' data-category='field_venue_target_id' data-label-category='@@data-category' data-category-id='" + $(this).val() + "'>"
          +"<input type='checkbox' id='v" + counter + "' value=" + $(this).text() + " data-category='@@data-category'>"
          +"<span></span>"
          + $(this).text()
          +"</label>"
        );
      }
    });
  }

  if ($('#edit-field-season-target-id').length > 0) {
    var counter = 0;
    $('#edit-field-season-target-id').find('option').each(function () {
      counter++;
      if ($(this).val() > 0) {
        $('.category-items-box.season').append(
          "<label class='component-ag-filter ag-filter-checkbox category-item' for='ss" + counter + "' data-category='field_season_target_id' data-label-category='@@data-category' data-category-id='" + $(this).val() + "'>"
          +"<input type='checkbox' id='ss" + counter + "' value=" + $(this).text() + " data-category='@@data-category'>"
          +"<span></span>"
          + $(this).text()
          +"</label>"
        );
      }
    });
  }

  if ($('#edit-field-colors-target-id').length > 0) {
    var counter = 0;
    $('#edit-field-colors-target-id').find('option').each(function () {
      counter++;
      if ($(this).val() > 0) {
        $('.category-items-box.color').append(
          "<label class='component-ag-filter ag-filter-checkbox category-item' for='colors" + counter + "' data-category='field_colors_target_id' data-label-category='@@data-category' data-category-id='" + $(this).val() + "'>"
          +"<input type='checkbox' id='colors" + counter + "' value=" + $(this).text() + " data-category='@@data-category'>"
          +"<span></span>"
          + $(this).text()
          +"</label>"
        );
      }
    });
  }

  $('.category-item').click(function (event) {
    event.preventDefault();
    $(this).find('input').prop('checked', function () {
      return !this.checked;
    });
    params.push($(this).attr('data-category') + "[] =" + $(this).attr('data-category-id'));
  });

  $('#submitSearch').click(function (event) {
    var path = window.location.origin + window.location.pathname;

    window.location.href = path + '?' + params.join('&');
  });

  $('.filter-clear-btn').click(function (event) {
    $('.category-item').each(function () {
      $(this).find('input').prop('checked', false);
    });
    var params = [];
  });

  if(urlParameters.length > 0) {
    $.each(urlParameters, function(key, value) {
      $.each(Object.entries(value), function(name, id) {
        params.push(id[0] + "=" + id[1]);
        $('label[data-category-id="' + id[1] + '"]').find('input').prop('checked', true);
      })
    })
  }
}

'use strict';

/**
 *  This is the main file for ag-page-not-found-tmp
 */
 
if ($('.component-ag-page-not-found-tmp').length) {
    $(function() {
        initAgPageNotFoundTmp();
    });
}

function initAgPageNotFoundTmp() {
    console.log('Initializing AgPageNotFoundTmp');
}

'use strict';

/**
 *  This is the main file for ag-page-press-tmp
 */
 
if ($('.component-ag-page-press-tmp').length) {
    $(function() {
        initAgPagePressTmp();
    });
}

function initAgPagePressTmp() {
    console.log('Initializing AgPagePressTmp');
}

'use strict';

/**
 *  This is the main file for ag-page-inspiration-tmp
 */

if ($('.component-ag-page-inspiration-tmp').length) {
    $(function () {
        initAgInspirationTmp();
    });
}

function initAgInspirationTmp() {
    console.log('Initializing AgInspirationTmp');

    $('.grid').masonry({
      itemSelector: '.grid-item',
      gutter: 10,
    });

    $('.gallery-grid').masonry({
      itemSelector: '.gallery-grid-item',
      gutter: 10,
    });
}

if($('.gallery-grid').length) {
  $('.gallery-grid').masonry({
    itemSelector: '.gallery-grid-item',
    gutter: 10,
  });
}

'use strict';

/**
 *  This is the main file for ag-page-pro-listing-tmp
 */
 
if ($('.component-ag-page-pro-listing-tmp').length) {
    $(function() {
        initAgPageProListingTmp();
    });
}

function initAgPageProListingTmp() {
    console.log('Initializing AgPageProListingTmp');
}

'use strict';

/**
 *  This is the main file for ag-page-search-for-content-tmp
 */
 
if ($('.component-ag-page-search-for-content-tmp').length) {
    $(function() {
        initAgPageSearchForContentTmp();
    });
}

function initAgPageSearchForContentTmp() {
    console.log('Initializing AgPageSearchForContentTmp');
}

'use strict';

/**
 *  This is the main file for ag-page-start-tmp
 */

if ($('.component-ag-page-start-tmp').length) {
    $(function () {
        initAgPageStartTmp();
    });
}

function initAgPageStartTmp() {
    console.log('Initializing AgPageStartTmp');

    var headerHideTimer = setInterval(function () {

        var globalHeader = $('#global-header');
        var globalFooter = $('.component-global-footer');
        var main = $('.main');

        if (globalHeader.length > 0 && globalFooter.length > 0) {

            globalHeader.hide();

            globalFooter.hide();

            main.css("margin-top", 0)

            clearInterval(headerHideTimer)

        }

    }, 10);


}

'use strict';

/**
 *  This is the main file for ag-page-tips-essentials-tmp
 */
 
if ($('.component-ag-page-tips-essentials-tmp').length) {
    $(function() {
        initAgPageTipsEssentialsTmp();
    });
}

function initAgPageTipsEssentialsTmp() {
    console.log('Initializing AgPageTipsEssentialsTmp');
}

'use strict';

/**
 *  This is the main file for ag-page-tips-article-tmp
 */

if ($('.component-ag-page-tips-article-tmp').length) {
    $(function () {
        initAgPageTipsArticleTmp();
    });
}

function initAgPageTipsArticleTmp() {
    console.log('Initializing AgPageTipsArticleTmp');

    var conrainerAdPos = $('.container-ad-pos');
    var defaultPos = $('.component-leaderboard-ad');
    var smPos = $('.leaderboard-ad-position-sm');
    var mdPos = $('.leaderboard-ad-position-md');
    var lgPos = $('.leaderboard-ad-position-lg');


    function mediaPos() {

        var adComponent = $('.leaderboard-ad-position');

        if (adComponent.length > 0) {

            if (window.matchMedia('(max-width: 767px)').matches && smPos.length > 0) {

                adComponent.appendTo(smPos);

            } else if (window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches && lgPos.length > 0) {

                adComponent.appendTo(lgPos);

            } else {

                if ((defaultPos.find(adComponent)).length < 1) {
                    adComponent.appendTo(defaultPos);
                }

            }

            conrainerAdPos.each(function (index, element) {

                if (($(this).find(adComponent)).length < 1) {
                    
                    $(this).addClass('d-none');

                } else {

                    $(this).removeClass('d-none');

                }

            });



        }


    }

    $(window).resize(function () {
        mediaPos();
    });

    mediaPos();
}



'use strict';

/**
 *  This is the main file for ag-page-tips-landing-page-tmp
 */
 
if ($('.component-ag-page-tips-landing-page-tmp').length) {
    $(function() {
        initAgPageTipsLandingPageTmp();
    });
}

function initAgPageTipsLandingPageTmp() {
    console.log('Initializing AgPageTipsLandingPageTmp');
}

'use strict';

/**
 *  This is the main file for ag-search-result
 */
 
if ($('.component-ag-search-result').length) {
    $(function() {
        initAgSearchResult();
    });
}

function initAgSearchResult() {
    console.log('Initializing AgSearchResult');
}

'use strict';

/**
 *  This is the main file for ag-page-tips-topic-tmp
 */

if ($('.component-ag-page-tips-topic-tmp').length) {
  $(function () {
    initAgPageTipsTopicTmp();
  });
}

function initAgPageTipsTopicTmp() {
  console.log('Initializing AgPageTipsTopicTmp');
  var params = [];
  var urlParameters = {};
  window.location.search.replace('?', '').split('&').reduce(
    function (s, c) {
      var t = c.split('=');
      var filterName = t[0].replace('[]', '');
      if (filterName) {
        if (!urlParameters[filterName]) {
          urlParameters[filterName] = [];
        }
        urlParameters[filterName].push(t[1]);
      }
    }, {}
  );

  if ($('#edit-topic').length > 0) {
    var counter = 0;
    var filterSelectedMarker = $('.filter-selected .marker-insert');
    var filterSelectedMarkerMob = $('.filter-selected-mob .marker-insert');
    var insertFilterResult = window.matchMedia('(min-width: 768px)').matches ? filterSelectedMarker : filterSelectedMarkerMob;

    $('#edit-topic').find('option').each(function () {
      counter++;
      if ($(this).val() > 0) {
        var element = $("<label class='component-ag-filter ag-filter-checkbox category-item' for='ss" + counter + "' data-category='topic' data-label-category='@@data-category' data-category-id='" + $(this).val() + "'>"
          +"<input type='checkbox' id='ss" + counter + "' value=" + $(this).text() + " data-category='@@data-category'>"
          +"<span></span>"
          + $(this).text()
          +"</label>");

        $('.category-items-box').append(element);

        if (urlParameters.topic && urlParameters.topic.includes($(this).val())) {
          element.find('input').attr('checked','checked');

          var filterElement = $('<div class="filter-selected-item"><span class="item-text">' + $(this).text() + '</span><span class="item-close" data-input-id="' + $(this).val() + '"></span></div>');
          console.log(filterElement, insertFilterResult);
          filterElement.insertBefore(insertFilterResult);
        }
      }
    });

    initAgFilter();

    $('.btn-bottom-container .btn-apply, .btn-apply-location, .mob-btn-apply').click(function (e) {
      $.each($('.category-item input:checked'), function(index, el) {
        params.push($(el).parent().attr('data-category') + "[]=" + $(el).parent().attr('data-category-id'));
      });

      var path = window.location.origin + window.location.pathname;
      window.location.href = path + '?' + params.join('&');
    });
  }
}

'use strict';

/**
 *  This is the main file for ag-share
 */
 
if ($('.component-ag-share').length) {
    $(function() {
        initAgShare();
    });
}

function initAgShare() {
    console.log('Initializing AgShare');
}

'use strict';

/**
 *  This is the main file for ag-sidebar-list
 */
 
if ($('.component-ag-sidebar-list').length) {
    $(function() {
        initAgSidebarList();
    });
}

function initAgSidebarList() {
    console.log('Initializing AgSidebarList');
}

'use strict';

/**
 *  This is the main file for ag-sidebar-right
 */
 
if ($('.component-ag-sidebar-right').length) {
    $(function() {
        initAgSidebarRight();
    });
}

function initAgSidebarRight() {
    console.log('Initializing AgSidebarRight');
}

'use strict';

/**
 *  This is the main file for ag-tips-article-tmp
 */
 
if ($('.component-ag-tips-article-tmp').length) {
    $(function() {
        initAgTipsArticleTmp();
    });
}

function initAgTipsArticleTmp() {
    console.log('Initializing AgTipsArticleTmp');
}

'use strict';

/**
 *   This is the main file for banner
 */

if ($('.component-banner').length > 0) {
  $(function () {
    initBanner();
  });
}

function initBanner() {
  console.log('Initializing Banner');

  function bannerTitlePosition() {
    var bannerTitle = $('.component-banner .title');
    var headerFindPro = $('.find-pro .col-content');
    var posFindPro = headerFindPro.offset();


    if (window.matchMedia('(max-width: 1199px) and (min-width: 768px)').matches && headerFindPro.length > 0) {

      bannerTitle.css({ top: (posFindPro.top - 54), left: posFindPro.left });

    } else {

      bannerTitle.css("top", "auto").css("bottom", 0).css("left", "27px");

    }
  }

  bannerTitlePosition();

  $(window).resize(bannerTitlePosition);
}

'use strict';

/**
 *  This is the main file for ag-title
 */

if ($('.component-ag-title').length) {
    $(function () {
        initAgTitle();
    });
}

function initAgTitle() {
    console.log('Initializing AgTitle');

    // if topic elements > 1 - add "/" beetwen the topic

    // var arr = $('.component-ag-title .topic');

    // function slash() {

    //     for (var i = 0; i < arr.length; i++) {

    //         if (i < (arr.length-1)) {

    //             arr[i].after(" / ")

    //         }

    //     }

    // }

    // if (arr.length > 1) {
    //     slash();
    // }



}

'use strict';

/**
 *  This is the main file for banner-full-width
 */
 
if ($('.component-banner-full-width').length) {
    $(function() {
        initBannerFullWidth();
    });
}

function initBannerFullWidth() {
    console.log('Initializing BannerFullWidth');
}


'use strict';

/**
 *  This is the main file for blog-detail
 */

if ($('.component-blog-detail').length) {
    $(function() {
        initBlogDetail();
    });
}

function initBlogDetail() {
    console.log('Initializing BlogDetail');
}


'use strict';

/**
 *  This is the main file for y
 */
var button = $('.go-back-button');
if (button.length) {
  button.on('click', function () {
    window.history.back()
  });
}

'use strict';

/**
 *  This is the main file for card-event
 */
 
if ($('.component-card').length) {
    $(function() {
        initCard();
    });
}

function initCard() {
    console.log('Initializing Card');
    
    // $('.component-card').each(function(index){
	//     var card = $(this);
	// 	card.find('a')
	// 		.on('mouseenter', function(){
	// 			card.find('a').addClass('hover');
	// 		})
	// 		.on('mouseleave', function(){
	// 			card.find('a').removeClass('hover');
	// 		});
    // });
}

'use strict';

/**
 *  This is the main file for card-author
 */
 
if ($('.component-card-author').length) {
    $(function() {
        initCardAuthor();
    });
}

function initCardAuthor() {
    console.log('Initializing CardAuthor');
}

'use strict';

/**
 *  This is the main file for card-contact
 */
 
if ($('.component-card-contact').length) {
    $(function() {
        initCardContact();
    });
}

function initCardContact() {
    console.log('Initializing CardContact');
}


'use strict';

/**
 *  This is the main file for card-navigation
 */

if ($('.component-card-navigation').length) {
    $(function() {
        initCardNavigation();
    });
}


var component_card_navigation = $('.component-card-navigation');

function initCardNavigation() {
    console.log('Initializing TermNavigation');

    component_card_navigation.each(function()
	{
		var navbar_toggler = $(this).find('.navbar-toggler');

		console.log(navbar_toggler);

		navbar_toggler.each(function()
		{
			$(this).on('click', function(event)
			{
				if($(this).hasClass('collapsed')){
					$(this).find('.fa-chevron-up').show();
					$(this).find('.fa-chevron-down').hide();
				} else {
					$(this).find('.fa-chevron-up').hide();
					$(this).find('.fa-chevron-down').show();
				}
			});
		});


	});
}

'use strict';

/**
 *  This is the main file for card-slash
 */
 
if ($('.component-card-slash').length) {
    $(function() {
        initCardSlash();
    });
}

function initCardSlash() {
    console.log('Initializing CardSlash');
}

'use strict';

/**
 *  This is the main file for card-event
 */

if ($('.component-card-event').length) {
    $(function() {
        initCardEvent();
        initFeaturedCardEvent();
    });
}

function initCardEvent() {
    console.log('Initializing CardEvent');

    $('.component-card-event').each(function(index){
	    var card = $(this);
		card.find('a')
			.on('mouseenter', function(){
				card.find('a').addClass('hover');
			})
			.on('mouseleave', function(){
				card.find('a').removeClass('hover');
			});
    });
}

function initCardEvent() {
    console.log('Initializing FeaturedCardEvent');

    $('.event-page').each(function(index){
	    var card = $(this);
		card.find('a')
			.on('mouseenter', function(){
				card.find('a').addClass('hover');
			})
			.on('mouseleave', function(){
				card.find('a').removeClass('hover');
			});
    });
}

'use strict';

/**
 *  This is the main file for card-two-horizontally
 */

if ($('.component-card-two-horizontally').length) {
    $(function() {
         initCardTwoHorizontally();
    });
}

function initCardTwoHorizontally() {
    console.log('Initializing CardTwoHorizontally');

    // $('.component-card-two-horizontally').each(function(index){
	//     var card = $(this);
	// 	card.find('a')
	// 		.on('mouseenter', function(){
	// 			card.find('a').addClass('hover');
	// 		})
	// 		.on('mouseleave', function(){
	// 			card.find('a').removeClass('hover');
	// 		});
    // });
}



'use strict';

/**
 *  This is the main file for carousel
 */
 
if ($('.component-carousel').length) {
    $(function() {
        initCarousel();
    });
}

function initCarousel() {
    console.log('Initializing Carousel');
}




'use strict';

/**
 *  This is the main file for fifty-fifty-centered
 */
 
if ($('.component-fifty-fifty-centered').length) {
    $(function() {
        initFiftyFiftyCentered();
    });
}

function initFiftyFiftyCentered() {
    console.log('Initializing FiftyFiftyCentered');
}

'use strict';

/**
 *  This is the main file for for-the-industry-text
 */
 
if ($('.component-for-the-industry-text').length) {
    $(function() {
        initForTheIndustryText();
    });
}

function initForTheIndustryText() {
    console.log('Initializing ForTheIndustryText');
}

'use strict';

/**
 *  This is the main file for form
 */

var component_form = $('.component-form');

if (component_form.length)
{
	$(function()
	{
		initForms();
	});
}


function initForms()
{
	component_form.each(function()
	{
		var self = $(this),
			fieldsets = self.find('fieldset');

		fieldsets.each(function()
		{
			var legend = $(this).find('legend');
			legend.hide().after('<div class="legend-form-fix">'+legend.text()+'</div>');
			
		});
	});
}

'use strict';

/**
 *  This is the main file for global-header
 */

if ($('.component-global-header').length) {
    $(function() {
        initGlobalHeader();
    });
}

function initGlobalHeader() {

    console.log('Initializing GlobalHeader');

    // Hide Header on on scroll down
	var didScroll,
		lastScrollTop = $(this).scrollTop(),
		delta = 150,
		hashChange = false,
		header = $('#global-header'),
		navbarHeight = header.outerHeight();
	/*
	$(window).scroll(function(){
	    // Need to check height twice because use can close promo or promo not showing on load
		navbarHeight = header.outerHeight();
	    didScroll = true;
	});
	*/

	$(window)
		.on('hashchange', function(e) {
	    	hashChange = true;
	    	lastScrollTop = $(this).scrollTop();
		})
		.on('scroll', function(e){
			setTimeout(function(){
				if(!hashChange) {
					hasScrolled();
				}
				hashChange = false;
			}, 300);
	});

	adjustContent(navbarHeight);


	setInterval(function() {
	    var st = $(this).scrollTop();
	    if(st == 0 && !header.hasClass('header-pinned')){
		    //console.log('Forcing Scroll');
		    hasScrolled(true);
	    }
	}, 300);


	function hasScrolled(override = false) {
	    var st = $(this).scrollTop();
	    navbarHeight = header.outerHeight();

		if(override) { // Fix any stuck header
			header.css('top', '0').addClass('header-pinned');
	        adjustContent(navbarHeight, override);
		} else {
			// Make sure they scroll more than delta
		    if(Math.abs(lastScrollTop - st) <= delta)
		        return;

		    if (st > lastScrollTop && st > navbarHeight){
		        // Scroll Down
		        //console.log('Natural Scroll Down');
		        header.css('top', (navbarHeight * -1)).removeClass('header-pinned');
		        adjustContent('0px');
		    } else {
		        // Scroll Up
		        //console.log('Natural Scroll Up');
		        header.css('top', '0').addClass('header-pinned');
		        adjustContent(navbarHeight);
		    }
		}

	    lastScrollTop = st;
	}

	function adjustContent(height, override = false){

		// console.log('Adjusting Content');

		$('div.main').css('marginTop', height);

		// console.log(header.css('top'));

		if(header.css('top') == '0px' || override == true){
			//console.log('Anchors Adjusted');
			$('a.anchor').css('top', (navbarHeight * -3));
		} else {
			$('a.anchor').css('top', (navbarHeight * -2));
		}
	}


}


'use strict';

/**
 *  This is the main file for global-navigation
 */

var component_global_navigation = $('.component-global-navigation');

if (component_global_navigation.length)
{
	$(function()
	{
		initGlobalNavigation();
	});
}


function initGlobalNavigation()
{
	component_global_navigation.each(function()
	{
		var mobile_menu = $(this).find('.mobile-menu'),
			mobile_close = mobile_menu.find('.close'),
			dropdown_item = mobile_menu.find('li.dropdown'),
			dropdown_toggle = mobile_menu.find('.dropdown-toggle'),
			mobile_trigger = $(this).find('.mobile-nav-trigger');

		mobile_trigger.on('click', function(event)
		{
			event.preventDefault();
			mobile_menu.addClass('is-active');
			$('body').addClass('menu-active');
		});

		mobile_close.on('click', function(event)
		{
			event.preventDefault();
			mobile_menu.removeClass('is-active subnav-exposed').attr('data-active-item', '');
			// slide item is undefined
			//slide_item.removeClass('is-active');
			$('body').removeClass('menu-active');
		});

		mobile_menu.attr('data-active-item', '');

		dropdown_item.each(function(index)
		{
			$(this).attr('data-item', index);
		});

		dropdown_toggle.each(function()
		{
			$(this).on('click', function(event)
			{
				event.preventDefault();

				var parent = $(this).parents('li.dropdown');

				if(parent.hasClass('is-active')) {
					parent.find('i.dropdown-toggle').removeClass('fa-minus').addClass('fa-plus');
					parent.removeClass('is-active');
					parent.find('ul.dropdown-menu').removeClass('active').slideUp('slow').attr('data-active-item', parent.attr(''));
				} else {
					parent.find('i.dropdown-toggle').removeClass('fa-plus').addClass('fa-minus');
					parent.addClass('is-active');
					parent.find('ul.dropdown-menu').addClass('active').slideDown('slow').attr('data-active-item', parent.attr('data-item'));
				}

			});
		});


	});
}

'use strict';

/**
 *  This is the main file for image-grid
 */
 
if ($('.component-image-grid').length) {
    $(function() {
        initImageGrid();
    });
}

function initImageGrid() {
    console.log('Initializing ImageGrid');
}

'use strict';

/**
 *  This is the main file for instagram
 */
 
if ($('.component-instagram').length) {
    $(function() {
        initInstagram();
    });
}

function initInstagram() {
    console.log('Initializing Instagram');
}

'use strict';

/**
 *  This is the main file for leaderboard-ad
 */
 
if ($('.component-leaderboard-ad').length) {
    $(function() {
        initLeaderboardAd();
    });
}

function initLeaderboardAd() {
    console.log('Initializing LeaderboardAd');
}

'use strict';

/**
 *  This is the main file for modal
 */
 
if ($('.component-pricing').length) {
    $(function() {
        initPricing();
    });
}

function initPricing() {
    console.log('Initializing Pricing');
}
'use strict';

/**
 *  This is the main file for modal
 */
 
if ($('.component-modal').length) {
    $(function() {
        initModal();
    });
}

function initModal() {
    console.log('Initializing Modal');
    
    var x, i, j, selElmnt, a, b, c;
	/* Look for any elements with the class "custom-select": */
	x = document.getElementsByClassName("custom-select");
	for (i = 0; i < x.length; i++) {
	  selElmnt = x[i].getElementsByTagName("select")[0];
	  /* For each element, create a new DIV that will act as the selected item: */
	  a = document.createElement("DIV");
	  a.setAttribute("class", "select-selected");
	  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	  x[i].appendChild(a);
	  /* For each element, create a new DIV that will contain the option list: */
	  b = document.createElement("DIV");
	  b.setAttribute("class", "select-items select-hide");
	  for (j = 1; j < selElmnt.length; j++) {
	    /* For each option in the original select element,
	    create a new DIV that will act as an option item: */
	    c = document.createElement("DIV");
	    c.innerHTML = selElmnt.options[j].innerHTML;
	    c.addEventListener("click", function(e) {
	        /* When an item is clicked, update the original select box,
	        and the selected item: */
	        var y, i, k, s, h;
	        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
	        h = this.parentNode.previousSibling;
	        for (i = 0; i < s.length; i++) {
	          if (s.options[i].innerHTML == this.innerHTML) {
	            s.selectedIndex = i;
	            h.innerHTML = this.innerHTML;
	            y = this.parentNode.getElementsByClassName("same-as-selected");
	            for (k = 0; k < y.length; k++) {
	              y[k].removeAttribute("class");
	            }
	            this.setAttribute("class", "same-as-selected");
	            break;
	          }
	        }
	        h.click();
	    });
	    b.appendChild(c);
	  }
	  x[i].appendChild(b);
	  a.addEventListener("click", function(e) {
	    /* When the select box is clicked, close any other select boxes,
	    and open/close the current select box: */
	    e.stopPropagation();
	    closeAllSelect(this);
	    this.nextSibling.classList.toggle("select-hide");
	    this.classList.toggle("select-arrow-active");
	  });
	}
	
	function closeAllSelect(elmnt) {
	  /* A function that will close all select boxes in the document,
	  except the current select box: */
	  var x, y, i, arrNo = [];
	  x = document.getElementsByClassName("select-items");
	  y = document.getElementsByClassName("select-selected");
	  for (i = 0; i < y.length; i++) {
	    if (elmnt == y[i]) {
	      arrNo.push(i)
	    } else {
	      y[i].classList.remove("select-arrow-active");
	    }
	  }
	  for (i = 0; i < x.length; i++) {
	    if (arrNo.indexOf(i)) {
	      x[i].classList.add("select-hide");
	    }
	  }
	}
	
	/* If the user clicks anywhere outside the select box,
	then close all select boxes: */
	document.addEventListener("click", closeAllSelect); 
	
	$('.component-modal').find('#promo-code-dialog').on('click', function(){
		$(this).slideUp('300', function(){
			$('.component-modal').find('#promo-code').slideDown();
		});	
	});
	
}


'use strict';

/**
 *  This is the main file for profession
 */
 
if ($('.component-profession').length) {
    $(function() {
        initProfession();
    });
}

function initProfession() {
    console.log('Initializing Profession');
}

'use strict';

/**
 *  This is the main file for promo
 */
var component_promo = $('.component-promo');


if ($('.component-promo').length) {
    $(function() {
        initPromo($('.component-promo').attr('rel'));
    });
}

function initPromo(rel) {
    console.log('Initializing Promo');
    var key = 'promo-' + rel;

    if (!$.cookie(key)) {
      $('.component-promo').removeClass('hidden');
    }

   	component_promo.each(function() {
		var close = $(this).find('.close');
		close.on('click', function(){
      $.cookie(key, 'hide');
			component_promo.slideUp('300', function(){
				component_promo.remove();
			});
		})
	});
}



'use strict';

/**
 *  This is the main file for share
 */
 
if ($('.component-share').length) {
    $(function() {
        initShare();
    });
}

function initShare() {
    console.log('Initializing Share');
}

'use strict';

/**
 *  This is the main file for submission-requirement
 */
 
if ($('.component-submission-requirement').length) {
    $(function() {
        initSubmissionRequirement();
    });
}

function initSubmissionRequirement() {
    console.log('Initializing SubmissionRequirement');
}

'use strict';

/**
 *  This is the main file for sticky-navigation
 */
var component_sticky_navigation = $('.component-sticky-navigation');

if ($('.component-sticky-navigation').length) {
    $(function() {
        initStickyNavigation();
    });
}

function initStickyNavigation() {
    console.log('Initializing StickyNavigation');

    component_sticky_navigation.each(function()
	{
		var sticky_navigation = $(this);
		var navbar_toggler = $(this).find('.navbar-toggler');

		navbar_toggler.each(function()
		{
			$(this).on('click', function(event)
			{
				if($(this).hasClass('collapsed')){
					$(this).find('.fa-chevron-up').show();
					$(this).find('.fa-chevron-down').hide();
				} else {
					$(this).find('.fa-chevron-up').hide();
					$(this).find('.fa-chevron-down').show();
				}
			});
		});

		var sticky_link = sticky_navigation.find('a.nav-link');

		sticky_link.on('click', function(){
			sticky_navigation.find('a.navbar-brand').attr('href', $(this).attr('href'));
			sticky_navigation.find('a.navbar-brand strong').html($(this).html());
			sticky_link.parent('li.nav-item').removeClass('active');
			$(this).parent('li.nav-item').addClass('active');
      $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - 300 }, 'slow');
    });

	});




	// Hide Header on on scroll down
	var didScroll,
		lastScrollTop = $(this).scrollTop(),
		delta = 150,
		hashChange = false,
		menu = $('.component-sticky-navigation'),
		main = $('div.main'),
		menuHeight = menu.outerHeight();
		header = $('#global-header'),
		navbarHeight = header.outerHeight();

	$(window)
		.on('hashchange', function(e) {
	    	hashChange = true;
	    	lastScrollTop = $(this).scrollTop();
		})
		.on('scroll', function(e){
			setTimeout(function(){
				if(!hashChange) {
					hasScrolled();
				}
				hashChange = false;
			}, 300);
	});

	menu.css('top', navbarHeight);
	main.css('paddingTop', menuHeight);

	setInterval(function() {
	    var st = $(this).scrollTop();
	    if(st == 0 && header.hasClass('header-pinned')){
		    hasScrolled(true);
	    }
	}, 300);

	function hasScrolled(override = false) {

	    var st = $(this).scrollTop();
	    navbarHeight = header.outerHeight();

	    if(override) { // Fix any stuck header
			// Scroll Up
		    menu.css('top', navbarHeight);
		} else {
			// Make sure they scroll more than delta
		    if(Math.abs(lastScrollTop - st) <= delta)
		        return;

		    if (st > lastScrollTop && st > navbarHeight){
		        // Scroll Down
				menu.css('top', '0');
		    } else {
		        // Scroll Up
		        menu.css('top', navbarHeight);
		    }

		}

	    lastScrollTop = st;
	}



}

'use strict';

/**
 *  This is the main file for submissions
 */
 
if ($('.component-submissions').length) {
    $(function() {
        initSubmissions();
    });
}

function initSubmissions() {
    console.log('Initializing Submissions');
}

'use strict';

/**
 *  This is the main file for term-navigation
 */
var component_term_navigation = $('.component-term-navigation');

 
if (component_term_navigation.length) {
    $(function() {
        initTermNavigation();
    });
}

function initTermNavigation() {
    console.log('Initializing TermNavigation');
    
    component_term_navigation.each(function()
	{
		var navbar_toggler = $(this).find('.navbar-toggler');
		
		console.log(navbar_toggler);

		navbar_toggler.each(function()
		{
			$(this).on('click', function(event)
			{
				if($(this).hasClass('collapsed')){
					$(this).find('.fa-chevron-up').show();
					$(this).find('.fa-chevron-down').hide();
				} else {
					$(this).find('.fa-chevron-up').hide();
					$(this).find('.fa-chevron-down').show();
				}
			});
		});

		
	});
	
	/*
	
	// Hide Header on on scroll down
	var didScroll,
		lastScrollTop = 0,
		delta = 5,
		menu = $('.component-term-navigation'),
		main = $('div.main'),
		menuHeight = menu.outerHeight();
		header = $('#global-header'),
		navbarHeight = header.outerHeight();
	
	$(window).scroll(function(event){
	    didScroll = true;
	});
	
	menu.css('top', navbarHeight);
	main.css('paddingTop', menuHeight);
		
	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 00);
	
	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    navbarHeight = header.outerHeight();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;

	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
			menu.css('top', '0');
	    } else {
	        // Scroll Up
	        menu.css('top', navbarHeight);
	    }
	    
	    lastScrollTop = st;
	}
	
	*/

}


'use strict';

/**
 *  This is the main file for testimonial
 */
 
if ($('.component-testimonial').length) {
    $(function() {
        initTestimonial();
    });
}

function initTestimonial() {
    console.log('Initializing Testimonial');
}

'use strict';

/**
 *  This is the main file for video-box
 */

var component_video_box = $('.component-video-box');

if (component_video_box.length)
{
	$(function()
	{
		initVideoBox();
	});
}


function initVideoBox()
{
	component_video_box.each(function()
	{
		var self = $(this),
			featured = self.find('.featured-video'),
			sidebar = self.find('.video-sidebar');

		_adjustVideoSidebar();

		$(window).on('load resize', function()
		{
			_adjustVideoSidebar();
		});

		function _adjustVideoSidebar()
		{
			if (mediaQueryWidth() > 991)
			{
				sidebar.css('max-height', featured.outerHeight());
			}
			else {
				sidebar.css('max-height', '100%');
			}
		}
	});
}

function mediaQueryWidth()
{
	return navigator.userAgent.indexOf('AppleWebKit/') > -1 ? $(window).width() : window.innerWidth;
}

// $(document).ready(function () {
//    var windowWidth = $(document).width();
//    var mobBtn = $('.mob-btn');

//    console.log(windowWidth);


//    function btnWidth() {
//         mobBtn.innerWidth(windowWidth);
//    }

//    btnWidth();
//    $(window).resize(btnWidth);
// });

'use strict';

/**
 *  This is the main file for videos
 */

// Looks like modalVideo is undefined function
//$('.video-modal-trigger').modalVideo();

var component_videos = $('.component-videos');

if (component_videos.length)
{
	$(function()
	{
		initVideos();
	});
}


function initVideos()
{
	component_videos.each(function()
	{
		var self = $(this),
			featured = self.find('.featured-video'),
			sidebar = self.find('.video-sidebar');

		_adjustVideoSidebar();

		$(window).on('load resize', function()
		{
			_adjustVideoSidebar();
		});

		function _adjustVideoSidebar()
		{
			if (mediaQueryWidth() > 991)
			{
				sidebar.css('max-height', featured.outerHeight());
			}
			else {
				sidebar.css('max-height', '100%');
			}
		}
	});
}

function mediaQueryWidth()
{
	return navigator.userAgent.indexOf('AppleWebKit/') > -1 ? $(window).width() : window.innerWidth;
}

'use strict';

/**
 *  This is the main file for y
 */
 
if ($('.component-y').length) {
    $(function() {
        initY();
    });
}

function initY() {
    console.log('Initializing Y');
}















'use strict';

/**
 *  This is the main file for hero-homepage
 */
 
if ($('.component-hero-homepage').length) {
    $(function() {
        initHeroHomepage();
    });
}

function initHeroHomepage() {
    console.log('Initializing HeroHomepage');
}


'use strict';

/**
 *  This is the main file for videos
 */

// Looks like modalVideo is undefined function
//$('.video-modal-trigger').modalVideo();

var component_videos = $('.component-videos');

if (component_videos.length)
{
	$(function()
	{
		initVideos();
	});
}


function initVideos()
{
	component_videos.each(function()
	{
		var self = $(this),
			featured = self.find('.featured-video'),
			sidebar = self.find('.video-sidebar');

		_adjustVideoSidebar();

		$(window).on('load resize', function()
		{
			_adjustVideoSidebar();
		});

		function _adjustVideoSidebar()
		{
			if (mediaQueryWidth() > 991)
			{
				sidebar.css('max-height', featured.outerHeight());
			}
			else {
				sidebar.css('max-height', '100%');
			}
		}
	});
}

function mediaQueryWidth()
{
	return navigator.userAgent.indexOf('AppleWebKit/') > -1 ? $(window).width() : window.innerWidth;
}

