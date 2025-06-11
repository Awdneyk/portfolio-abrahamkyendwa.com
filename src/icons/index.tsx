import ReactIcon from './ReactIcon';
import PythonIcon from './PythonIcon';
import NextJsIcon from './NextJsIcon';
import TensorFlowIcon from './TensorFlowIcon';

// Simple text-based icons for technologies without complex logos
function SimpleTextIcon({ text, className = "w-8 h-8" }: { text: string; className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center bg-white/10 rounded border border-white/20 text-xs font-bold`}>
      {text}
    </div>
  );
}

// Generic tech icon for specialized tools
function GenericTechIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );
}

// Arduino IDE icon
function ArduinoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.82 12c0 6.52-5.29 11.82-11.82 11.82S.18 18.52.18 12 5.47.18 12 .18 23.82 5.48 23.82 12zM6.6 10.4h1.2v1.2H6.6zm0 2.4h1.2v1.2H6.6zm2.4-2.4h1.2v1.2H9zm0 2.4h1.2v1.2H9zm2.4-4.8h1.2v1.2h-1.2zm0 2.4h1.2v1.2h-1.2zm0 2.4h1.2v1.2h-1.2zm0 2.4h1.2v1.2h-1.2zm2.4-4.8h1.2v1.2h-1.2zm0 2.4h1.2v1.2h-1.2zm2.4-2.4h1.2v1.2h-1.2zm0 2.4h1.2v1.2h-1.2z"/>
    </svg>
  );
}

// VS Code icon
function VSCodeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
    </svg>
  );
}

// Tailwind CSS icon
function TailwindIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
    </svg>
  );
}

export const TechIcon = ({ name, className = "w-8 h-8" }: { name: string; className?: string }) => {
  switch (name) {
    case 'React':
      return <ReactIcon className={className} />;
    case 'Python':
      return <PythonIcon className={className} />;
    case 'Next.js':
      return <NextJsIcon className={className} />;
    case 'TensorFlow':
      return <TensorFlowIcon className={className} />;
    case 'Arduino IDE':
      return <ArduinoIcon className={className} />;
    case 'VS Code':
      return <VSCodeIcon className={className} />;
    case 'Tailwind CSS':
      return <TailwindIcon className={className} />;
    case 'Proteus':
      return <SimpleTextIcon text="PR" className={className} />;
    case 'Multisim':
      return <SimpleTextIcon text="MS" className={className} />;
    case 'Octave':
      return <SimpleTextIcon text="OC" className={className} />;
    case 'MATLAB':
      return <SimpleTextIcon text="ML" className={className} />;
    case 'Vercel':
      return <SimpleTextIcon text="VC" className={className} />;
    case 'Figma':
      return <SimpleTextIcon text="FG" className={className} />;
    case 'Claude':
      return <SimpleTextIcon text="CL" className={className} />;
    case 'ChatGPT':
      return <SimpleTextIcon text="GPT" className={className} />;
    case 'C/C++':
      return <SimpleTextIcon text="C++" className={className} />;
    case 'Fritzing':
      return <SimpleTextIcon text="FZ" className={className} />;
    case 'Notion':
      return <SimpleTextIcon text="NT" className={className} />;
    default:
      return <GenericTechIcon className={className} />;
  }
};