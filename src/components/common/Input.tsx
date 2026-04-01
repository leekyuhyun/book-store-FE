import React, { type ForwardedRef, type InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import type { Theme } from '../../style/theme';
type Props = InputHTMLAttributes<HTMLInputElement>;

const InputText = React.forwardRef((props: Props, ref: ForwardedRef<HTMLInputElement>) => {
  return <InputTextStyled {...props} ref={ref} />;
});

const InputTextStyled = styled.input<{ theme: Theme }>`
  padding: 0.25rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.text};
`;

export default InputText;
