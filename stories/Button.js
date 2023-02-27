import './button.scss';

export const createButton = ({ mode, size, label, onClick }) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  btn.className = ['button', `button--${size}`, `button--${mode}`].join(' ');

  return btn;
};
