import styles from './AccordionContainer.module.css';
import { useState, useCallback } from 'react';
import { joinClassNames, ReactCSSVariables, ReactNodeOrNodeProvider, getModifiedReactNode } from '../../utils';
import { Accordion, AccordionData } from './Accordion';

interface Props {
  id?: string;
  className?: string;
  accordionData: AccordionData[];
  gap?: string;
  accordionContent?: ReactNodeOrNodeProvider;
  accordionFooterContent?: ReactNodeOrNodeProvider;
  children?: React.ReactNode;
}

const AccordionContainer = ({
  id,
  className,
  accordionData,
  gap = '20px',
  accordionContent,
  accordionFooterContent,
  children
}: Props) => {
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
                  openAccordions[i] || openAccordions[i - 1] ? styles.spacerExpanded : ''
                )}
              />
            )}
            <Accordion
              data={data}
              toggleCallback={() => toggleAccordion(i)}
              footerContent={getModifiedReactNode(accordionFooterContent, data, i)}
            >
              {getModifiedReactNode(accordionContent, data, i)}
            </Accordion>
          </div>
        );
      })}
      {children}
    </div>
  );
};
  
  export default AccordionContainer;