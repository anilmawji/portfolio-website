import styles from './AccordionContainer.module.css';
import { useState, useCallback } from 'react';
import { joinClassNames, ReactCSSVariables } from '../../utils';
import { Accordion, AccordionInfo } from './Accordion';

interface Props {
  id?: string;
  className?: string;
  accordionData: AccordionInfo[];
  gap?: string;
  children?: React.ReactNode | ((data: AccordionInfo) => React.ReactNode);
  footerChildren?: React.ReactNode | ((data: AccordionInfo) => React.ReactNode);
}
  
  const AccordionContainer = ({ id, className, accordionData, gap = '20px', children, footerChildren }: Props) => {
    const [openAccordions, setOpenAccordions] = useState<boolean[]>(Array(accordionData.length).fill(false));

    const containerStyle: ReactCSSVariables = {
      '--accordion-gap': gap
    };

    const toggleAccordion = useCallback((index: number) => {
      setOpenAccordions(prev => {
        const newOpened = [...prev];
        newOpened[index] = !newOpened[index];
        return newOpened;
      });
    }, []);

    return (
      <div id={id} className={joinClassNames(styles.container, className)} style={containerStyle}>
        {accordionData.map((data, i) => {
          return (
            <div key={i}>
              {i !== 0 && (
                <div
                  className={joinClassNames(
                    styles.spacer,
                    openAccordions[i] || openAccordions[i - 1] ? ` ${styles.spacerExpanded}` : ''
                  )}
                />
              )}
              <Accordion
                data={data}
                toggleCallback={() => toggleAccordion(i)}
                footerChildren={typeof footerChildren === 'function' ? footerChildren(data) : footerChildren}
              >
                {typeof children === 'function' ? children(data) : children}
              </Accordion>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default AccordionContainer;