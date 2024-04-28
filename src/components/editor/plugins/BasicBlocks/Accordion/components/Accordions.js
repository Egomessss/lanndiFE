export default (dc, { defaultModel, defaultView, ...config }) => {
  const type = 'accordions';
  const attrAccordions = config.attrAccordions;

  dc.addType(type, {
    model: {
      defaults: {
        copyable: false,
        droppable: false,
        name: 'Accordions',
        'attr-accordions': config.attrAccordions,
        'attr-accordion': config.attrAccordion,
        'attr-accordion-content': config.attrAccordionContent,
        'attr-accordion-container': config.attrAccordionContainer,
        'class-accordion-active': config.classAccordionActive,
        'selector-accordion': config.selectorAccordion,

        script() {
          var i;
          var el = this;
          var attrAccordions = '[' + '{[ attr-accordions ]}' + ']';
          var attrAccordion = '[' + '{[ attr-accordion ]}' + ']';
          var attrAccordionContent =
            '[' + '{[ attr-accordion-content ]}' + ']';
          var attrAccordionContainer =
            '[' + '{[ attr-accordion-container ]}' + ']';
          var classAccordionActive = '{[ class-accordion-active ]}';
          var selectorAccordion = '{[ selector-accordion ]}';
          var body = document.body;
          var matches =
            body.matchesSelector ||
            body.webkitMatchesSelector ||
            body.mozMatchesSelector ||
            body.msMatchesSelector;

          // var hideContents = () => {
          //   var accordionContents =
          //     el.querySelectorAll(attrAccordionContent) || [];
          //   if (accordionContents) {
          //     for (i = 0; i < accordionContents.length; i++) {
          //       accordionContents[i].style.display = "none";
          //     }
          //   }
          // };

          var activeAccordion = (accordionEl) => {
            var accordionContainers =
              el.querySelectorAll(attrAccordionContainer) || [];

            if (accordionContainer) {
              for (i = 0; i < accordionContainers.length; i++) {
                var accordionContainer = accordionContainers[i];
                var newClass = accordionContainer.className
                  .replace(classAccordionActive, '')
                  .trim();

                accordionContainer.className = newClass;
              }
            }

            // hideContents();
            accordionEl.className += ' ' + classAccordionActive;
          };

          var deactiveAccordion = (accordionEl) => {
            var newClass = accordionEl.className
              .replace(classAccordionActive, '')
              .trim();
            accordionEl.className = newClass;
          };

          el.addEventListener('click', (e) => {
            console.log('click event triggered');
            var target = e.target;
            console.log('target:', target);
            if (matches.call(target, attrAccordion)) {
              console.log('target matches attrAccordion');
              var selector = '#' + target.getAttribute('id');
              console.log('selector:', selector);
              var selectedElement = el.querySelector(selector);
              console.log('selectedElement:', selectedElement);
              if (selectedElement) {
                var currentDisplay = selectedElement.style.display;
                console.log('currentDisplay:', currentDisplay);
                if (currentDisplay === 'block') {
                  console.log('currentDisplay is block, deactivating accordion');
                  deactiveAccordion(target.parentElement);
                  selectedElement.style.display = 'none';
                  console.log('accordion deactivated');
                } else {
                  console.log('currentDisplay is not block, activating accordion');
                  activeAccordion(target.parentElement);
                  selectedElement.style.display = 'block';
                  console.log('accordion activated');
                }
              } else {
                console.log('No element found with selector:', selector);
              }
            } else {
              console.log('target does not match attrAccordion');
            }
          });
        },
        ...config.accordionsProps,
      },

      init() {
        const attrs = this.getAttributes();
        attrs[config.attrAccordions] = 1;
        this.setAttributes(attrs);
      },
      isComponent(el) {
        if (el.hasAttribute && el.hasAttribute(attrAccordions)) {
          return { type };
        }
      },
    },

    view: {
      init() {
        const comps = this.model.components();
        !comps.length && comps.add(config.template);
      },

      onRender() {
      },
    },
  });
};
