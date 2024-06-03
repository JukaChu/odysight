var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();


//anim
//add counting number to show delay speed
var counterContainer = [...document.querySelectorAll('.counting-delay')];

function addCoutingDelay() {
    if (counterContainer.length) {
        counterContainer.forEach((cont) => {
            var anims = [...cont.querySelectorAll('.anim')];
            anims.forEach((btn, k) => {
                btn.dataset.animDelay = k * 40;
            })
        })
    }
}

addCoutingDelay();

var animStage = [...document.querySelectorAll('.anim-stage')];

function scrollAnimationsStage() {
    if (animStage.length) {
        var animItems = [...document.querySelectorAll(':scope > *')];

        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // console.log(entry.target);
                var eles = [...entry.target.querySelectorAll(":scope > *")];
                var len = eles.length;

                // console.log(eles);
                if (entry.isIntersecting) {
                    for (var i = 0; i < len; i++) {
                        // console.log(eles[1]);
                        eles[i].style.animationDelay = (entry.target.dataset.animDelay * i) + 'ms';
                        eles[i].style.animationDuration = entry.target.dataset.animDuration + 'ms';
                        eles[i].style.animationName = entry.target.dataset.anim;
                    }
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5})

        animStage.forEach((animate, k) => {
            observer.observe(animate);
        })

    }
}

scrollAnimationsStage();


// scroll animations
var anim = document.querySelectorAll('.anim');

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }


                    el.classList.add('done');
                    observer.unobserve(entry.target);
                    if (el.classList.contains('some-info__cont')) {
                        // console.log('zuza');
                        counters.forEach(counter);
                    }
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();

//


var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');


function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();


//swipers

//news slider

let videoSection = [...document.querySelectorAll('.video-slider__wrapper')];

function startVideoSlider() {
    if (!videoSection.length) {

    } else {
        videoSection.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                grabCursor: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,

                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 0,

                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 2,
                },


            });

            swiper2.on('slideChange', function () {
                $('.play-btn.pause').click();
            });
        })


    }
}

startVideoSlider();

//news slider


//swipers


//modal windows

//modal window

let btnMod = [...document.querySelectorAll('.btn-mod')];
let textMod = [...document.querySelectorAll('.text-mod')];
let modJobs = [...document.querySelectorAll('.mod-jobs')];
let modals = [...document.querySelectorAll('.modal-window')];
let closeModal = [...document.querySelectorAll('.modal-close')];
let clsSecModal = [...document.querySelectorAll('.modal-window .cls')];
let backplates = [...document.querySelectorAll('.backplate')];

function controlModal() {
    if (btnMod.length || textMod.length || modJobs.length) {
        btnMod.forEach((btn) => {
            let data = btn.dataset.mod;

            btn.addEventListener('click', (e) => {

                e.preventDefault();
                e.stopPropagation();


                if (document.querySelector('.modal-window.visible')) {
                    document.querySelector('.modal-window.visible').classList.remove('visible');
                }
                modals.forEach((mod) => {
                    if (mod.dataset.modal === data) {
                        document.body.classList.add('no-scroll');

                        mod.classList.add('visible');

                    }
                })
            })
        });

        textMod.forEach((btn) => {
            let data = btn.dataset.mod;

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                let titleBtn = btn.closest('.plus-over').querySelector('.text-plus .sub-title');
                let textBtn = btn.closest('.plus-over').querySelector('.text-plus .text');


                if (document.querySelector('.modal-window.visible')) {
                    document.querySelector('.modal-window.visible').classList.remove('visible');
                }
                modals.forEach((mod) => {
                    if (mod.dataset.modal === data) {
                        document.body.classList.add('no-scroll');

                        mod.classList.add('visible');
                        // console.log(data);
                        if (data === 'img') {
                            // console.log('gagaga');
                            let imgBtn = btn.closest('.plus-over').querySelector('.table-img img.mob');
                            let modImg = mod.querySelector('.modal-image img');
                            modImg.src = imgBtn.src;
                        } else {
                            let modTitle = mod.querySelector('.modal-text-title .sub-title');
                            let modText = mod.querySelector('.modal-text');

                            modTitle.innerHTML = titleBtn.innerHTML;
                            modText.innerHTML = textBtn.innerHTML;
                        }


                    }
                })
            })
        });


        $('body').on('click', '.mod-jobs', function (e) {
            e.preventDefault();
            e.stopPropagation();

            let data = this.dataset.mod;

            let rightText = this.closest('.job-mod-owner').querySelector('.text');
            let leftText = this.closest('.job-mod-owner').querySelector('.hidden-wrap');
            let hiddenId = this.closest('.job-mod-owner').dataset.id;


            if (document.querySelector('.modal-window.visible')) {
                document.querySelector('.modal-window.visible').classList.remove('visible');
            }
            modals.forEach((mod) => {
                if (mod.dataset.modal === data) {
                    document.body.classList.add('no-scroll');

                    mod.classList.add('visible');
                    // console.log(data);
                    [...document.querySelectorAll('.form')].forEach((frm) => {
                        frm.classList.remove('done')
                    });
                    let modRight = mod.querySelector('.job-content-right');
                    let modLeft = mod.querySelector('.job-content-columns');
                    let hiddenIdInput = mod.querySelector('.id-input input');

                    if (data === 'auction') {

                        let modLoad = this.closest('.job-mod-owner').querySelector('.hidden-load');
                        let modLoadInner = mod.querySelector('.auction-modal-bot');
                        modLoadInner.innerHTML = modLoad.innerHTML;
                    }

                    modRight.innerHTML = rightText.innerHTML;
                    modLeft.innerHTML = leftText.innerHTML;
                    hiddenIdInput.value = Number(hiddenId);


                }
            })


        });



        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');

            })
        });

        clsSecModal.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');

            })
        });


    }
}

controlModal();


//modal


//video controls

var player3;

function createVideo(videoBlockId, videoId, btn) {
    player3 = new YT.Player(videoBlockId, {
        videoId: videoId,
        playerVars: {
            // 'autoplay':1,
            'autohide': 1,
            'showinfo': 0,
            'rel': 0,
            'loop': 1,
            'playsinline': 1,
            'fs': 1,
            'allowsInlineMediaPlayback': true
        },
        events: {
            'onReady': function (e) {
                // e.target.mute();
                // if ($(window).width() > 991) {

                e.target.playVideo();

                // }
            },
            'onStateChange': function (e) {
                // console.log(YT.PlayerState);

                if (e.data == YT.PlayerState.ENDED) {
                    // console.log("Video Ended");
                }

                if (e.data == YT.PlayerState.PLAYING) {
                    // console.log("Video Playing");
                }

                if (e.data == YT.PlayerState.PAUSED) {
                    // console.log("Video Paused");
                    $(btn).closest('.section-media').find('.video-box .video').html('');
                    btn.classList.remove('pause');
                    btn.closest('.section-media').classList.remove('hide-poster');
                }

                if (e.data == YT.PlayerState.BUFFERING) {
                    // console.log("Video Buffering");
                }

                if (e.data == YT.PlayerState.CUED) {
                    // console.log("Video Cued");
                }


            }
        }
    });
}


let botSlides = [...document.querySelectorAll('.play-btn')];
var player2;

$('body').on('click', '.play-btn', function (e) {
    let btn = this;
    let type = btn.dataset.videoType;
    let id = btn.dataset.videoId;
    let videoCont = btn.closest('.section-media');

    videoCont.dataset.videoType = type;
    videoCont.dataset.videoId = id;

    let videoId = id;
    botSlides.forEach((btn2) => {
        if (btn === btn2) {
        } else {
            if (btn2.classList.contains('pause')) {
                btn2.click();
            }
        }
    });

    if (type === 'vimeo') {
        player2 = new Vimeo.Player(btn.closest('.section-media').querySelector('.vimeo-player'));


        if (btn.classList.contains('pause')) {
            player2.pause();
            btn.classList.remove('pause');
            btn.closest('.section-media').classList.remove('hide-poster');
        } else {
            player2.play();
            btn.classList.add('pause');
            btn.closest('.section-media').classList.add('hide-poster');
            player2.on('pause', () => {
                btn.classList.remove('pause');
                btn.closest('.section-media').classList.remove('hide-poster');
            });
        }

    } else {
        if (type === 'video') {
            if (btn.classList.contains('pause')) {
                $(btn).closest('.section-media').find('.video-box .video').html('');
                btn.classList.remove('pause');
                btn.closest('.section-media').classList.remove('hide-poster');
            } else {
                let videoBl = document.createElement('video');
                videoBl.src = id;
                videoBl.playsinline = true;
                videoBl.controls = false;


                btn.classList.add('pause');
                btn.closest('.section-media').classList.add('hide-poster');

                $(btn).closest('.section-media').find('.video-box .video').append(videoBl);
                $(btn).closest('.section-media').find('.video-box video')[0].play();
            }


        } else {
            if (btn.classList.contains('pause')) {
                $(btn).closest('.section-media').find('.video-box .video').html('');
                btn.classList.remove('pause');
                btn.closest('.section-media').classList.remove('hide-poster');
            } else {
                $(btn).closest('.section-media').find('.video-box .video').append('<div class="video-iframe" id="' + videoId + '"></div>');
                createVideo(videoId, videoId, btn);
                btn.classList.add('pause');
                btn.closest('.section-media').classList.add('hide-poster');
            }


        }
    }
});

// videoControlSlides();

let tabBtn = [...document.querySelectorAll('.tab-btn')];


function changeTab() {
    if (!tabBtn.length) {

    } else {
        tabBtn.forEach((btn, k) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...btn.closest('.tabs-owner').querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');

                        } else {
                            tab.classList.remove('active');

                        }
                    });

                }
            })
        });

    }
}

changeTab();


