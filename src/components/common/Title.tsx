import { styled } from 'styled-components';
import type { ColorKey, HeadingSize, Theme } from '../../style/theme';

interface Props {
  children: React.ReactNode;
  size: HeadingSize;
  color?: ColorKey;
}

const TitleStyled = styled.h1<Omit<Props, 'children'> & { theme: Theme }>`
  font-size: ${({ theme, size }) => theme.heading[size].fontSize};
  color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.primary)};
`;

function Title({ children, size, color }: Props) {
  return (
    <TitleStyled size={size} color={color}>
      {children}
    </TitleStyled>
  );
}

export default Title;
