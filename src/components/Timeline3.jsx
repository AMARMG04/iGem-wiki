import React, { useEffect } from 'react';
import $ from 'jquery';

const Timeline3 = () => {
  useEffect(() => {
    (function($) {
      $.fn.timeline = function() {
        const selectors = {
          id: $(this),
          item: $(this).find('.timeline-item'),
          activeClass: 'timeline-item--active',
          img: '.timeline__img'
        };

        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
          'background-image',
          'url(' + selectors.item.first().find(selectors.img).attr('src') + ')'
        );

        const itemLength = selectors.item.length;

        $(window).scroll(function() {
          let max, min;
          const pos = $(this).scrollTop();
          selectors.item.each(function(i) {
            min = $(this).offset().top;
            max = $(this).height() + $(this).offset().top;
            const that = $(this);

            if (i === itemLength - 2 && pos > min + $(this).height() / 2) {
              selectors.item.removeClass(selectors.activeClass);
              selectors.id.css(
                'background-image',
                'url(' + selectors.item.last().find(selectors.img).attr('src') + ')'
              );
              selectors.item.last().addClass(selectors.activeClass);
            } else if (pos <= max - 40 && pos >= min) {
              selectors.id.css(
                'background-image',
                'url(' + $(this).find(selectors.img).attr('src') + ')'
              );
              selectors.item.removeClass(selectors.activeClass);
              $(this).addClass(selectors.activeClass);
            }
          });
        });
      };
    })($);

    $('#timeline-1').timeline();
  }, []);

  return (
    <div id="timeline-1" className="timeline-container w-full py-20 bg-gray-900 relative">
      <div className="timeline-header text-center text-white mb-20">
        <h2 className="timeline-header__title text-4xl font-semibold">Mustafa Kemal Atatürk</h2>
        <h3 className="timeline-header__subtitle text-xl opacity-50 mt-4">FATHER OF THE TURKS</h3>
      </div>

      <div className="timeline mx-auto max-w-4xl flex flex-col">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className="timeline-item flex flex-col items-center mb-16 data-text='FATHER OF THE TURKS'"
          >
            <div className="timeline__content">
              <img
                src={item.imgSrc}
                alt={item.year}
                className="timeline__img max-w-full shadow-lg mb-6"
              />
              <h2 className="timeline__content-title text-white text-5xl font-light">{item.year}</h2>
              <p className="timeline__content-desc text-gray-400 text-base mt-4">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="demo-footer text-center mt-10">
        <a
          href="http://www.turkishnews.com/Ataturk/life.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500"
        >
          Source/Kaynak
        </a>
      </div>
    </div>
  );
};

const timelineItems = [
  {
    year: '1881',
    desc: 'He was born in 1881 in Salonica...',
    imgSrc: 'http://i.cdn.ensonhaber.com/resimler/diger/ataturk_3473.jpg'
  },
  {
    year: '1893',
    desc: 'First enrolled in a traditional religious school...',
    imgSrc: 'http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg'
  },
  {
    year: '1905',
    desc: 'In 1905, Mustafa Kemal graduated from the War Academy...',
    imgSrc: 'http://www.volpeypir.com/upload/3732.jpg'
  },
  {
    year: '1908',
    desc: 'In 1908 he helped the group of officers...',
    imgSrc: 'http://cdn.yemek.com/uploads/2014/11/ataturk-10-kasim.jpg'
  },
  {
    year: '1915',
    desc: 'In 1915, when Dardanelles campaign was launched...',
    imgSrc: 'http://ataturk.istanbul.gov.tr/GalleryLibrary/12.jpg'
  }
];

export default Timeline3;
