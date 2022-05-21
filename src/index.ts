export const KEY = 'Goldenthumb';

export const getFingerprint = (key: string = KEY) => {
  if (typeof window === 'undefined') {
    throw new Error('브라우저 환경에서만 사용 가능 합니다.');
  }

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('사용할 수 없는 브라우저 입니다.');
  }

  context.fillStyle = 'rgb(255,0,255)';
  context.beginPath();
  context.rect(20, 20, 150, 100);
  context.fill();
  context.stroke();
  context.closePath();
  context.beginPath();
  context.fillStyle = 'rgb(0,255,255)';
  context.arc(50, 50, 50, 0, Math.PI * 2, true);
  context.fill();
  context.stroke();
  context.closePath();
  context.textBaseline = 'top';
  context.font = '17px "Arial 17"';
  context.textBaseline = 'alphabetic';
  context.fillStyle = 'rgb(255,5,5)';
  context.rotate(0.03);
  context.fillText(key, 4, 17);
  context.fillStyle = 'rgb(155,255,5)';
  context.shadowBlur = 8;
  context.shadowColor = 'red';
  context.fillRect(20, 12, 100, 5);

  const string = canvas.toDataURL().replace('data:image/png;base64,', '');
  const bin = window.atob(string);

  return bin2hex(bin.slice(-16, -12));
};

function bin2hex(bin: string) {
  let char = '';
  let hex = '';

  for (let i = 0; i < bin.length; ++i) {
    char = bin.charCodeAt(i).toString(16);
    hex += char.length < 2 ? `0${char}` : char;
  }

  return hex;
}
