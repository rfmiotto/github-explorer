import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';
import { shade, lighten } from 'polished';

import { SwitchContainer } from './styles';

interface Props {
  toggleTheme(): void;
}

// eslint-disable-next-line react/prop-types
const ThemeSwitcher: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <SwitchContainer>
      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={lighten(0.5, colors.background)}
        onColor={shade(0.5, colors.background)}
      />
    </SwitchContainer>
  );
};

export default ThemeSwitcher;
