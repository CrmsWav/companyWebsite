import React from 'react';
// Styles
import { StyledSliderItem } from './SliderItemStyles';

type SliderItemProps = {
  slideClass: string;
  zoomFactor: number;
  id: number;
  callback: (id: number) => void;
  callbackOut: () => void;
  slideMargin: number;
  visibleSlides: number;
  children: number;
};

const SliderItem: React.FC<SliderItemProps> = ({
                                                 slideClass,
                                                 zoomFactor,
                                                 id,
                                                 callback,
                                                 callbackOut,
                                                 slideMargin,
                                                 visibleSlides,
                                                 children
                                               }) => (
  <StyledSliderItem
    zoomFactor={zoomFactor}
    slideMargin={slideMargin}
    visibleSlides={visibleSlides}
    className={slideClass}
    onMouseOver={() => callback(id)}
    onMouseOut={callbackOut}
  >
    {children}
  </StyledSliderItem>
);

export default SliderItem;
