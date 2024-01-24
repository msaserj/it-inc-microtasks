import React, {ReactNode} from 'react';

type PropsType = {
  children: ReactNode;
  color: string;
};

export const LightButton = (props: PropsType) => {

  const style: any = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    fontSize: '3.3rem',
    borderRadius: '10px',
    color: props.color,
    backgroundColor: "#2f2f2f",
    border: `2px solid ${props.color}`,
    boxShadow: `1px 1px 5px ${props.color}, 1px 1px 5px ${props.color}`
  }

  return (
    <div style={style}>
      {props.children}
    </div>
  )
}
