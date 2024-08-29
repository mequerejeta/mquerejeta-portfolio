import Image from 'next/image';
import React from 'react';

const AutoSlider = () => {
    return (
        <div className="flex space-x-16 overflow-hidden group bg-slate-800">
        <div className="flex animate-loop-scroll space-x-16 group-hover:paused">
                    <Image title="react" className="max-w-none" height={60} width={60} alt="" src="images/react.svg" />
                    <Image title="js"className="max-w-none" height={60} width={60} alt="" src="images/javascript-original.svg" />
                    <Image title="C#"className="max-w-none" height={60} width={60} alt="" src="images/csharp.svg" />
                    <Image title="css" className="max-w-none"height={60} width={60} alt="" src="images/css3-original.svg" />
                    <Image title="redux"className="max-w-none" height={60} width={60} alt="" src="images/redux-svgrepo-com.svg" />
                    <Image title="nextjs"className="max-w-none" height={60} width={60} alt="" src="images/nextjs.svg" />
                    <Image title="typescript"className="max-w-none" height={60} width={60} alt="" src="images/typescript-svgrepo-com.svg" />
                    <Image title="dotnet" className="max-w-none"height={60} width={60} alt="" src="images/dotnetcore-original.svg" />
                    <Image title="tailwind"className="max-w-none" height={60} width={60} alt="" src="images/tailwindcss-plain.svg" />
                    <Image title="git"className="max-w-none" height={60} width={60} alt="" src="images/git-original.svg" />
                    <Image title="html" className="max-w-none"height={60} width={60} alt="" src="images/html5-original.svg" />
                    <Image title="bootstrap"className="max-w-none" height={60} width={60}  alt=""src="images/bootstrap-original.svg" />
                    <Image title="visual"className="max-w-none" height={60} width={60} alt="" src="images/visualstudio-plain.svg" />
                    <Image title="vscode"className="max-w-none" height={60} width={60} alt="" src="images/vscode-original.svg" />
                    <Image title="blazor"className="max-w-none" height={60} width={60} alt="" src="images/blazor.svg" />
                    <Image title="entity"className="max-w-none" height={60} width={60} alt="" src="images/entity-original.svg" />
          </div>
          <div className="flex animate-loop-scroll space-x-16 group-hover:paused"  aria-hidden="true">
                  <Image title="react" className="max-w-none" height={60} width={60} alt="" src="images/react.svg" />
                    <Image title="js"className="max-w-none" height={60} width={60} alt="" src="images/javascript-original.svg" />
                    <Image title="C#"className="max-w-none" height={60} width={60} alt="" src="images/csharp.svg" />
                    <Image title="css" className="max-w-none"height={60} width={60} alt="" src="images/css3-original.svg" />
                    <Image title="redux"className="max-w-none" height={60} width={60} alt="" src="images/redux-svgrepo-com.svg" />
                    <Image title="nextjs"className="max-w-none" height={60} width={60} alt="" src="images/nextjs.svg" />
                    <Image title="typescript"className="max-w-none" height={60} width={60} alt="" src="images/typescript-svgrepo-com.svg" />
                    <Image title="dotnet" className="max-w-none"height={60} width={60} alt="" src="images/dotnetcore-original.svg" />
                    <Image title="tailwind"className="max-w-none" height={60} width={60} alt="" src="images/tailwindcss-plain.svg" />
                    <Image title="git"className="max-w-none" height={60} width={60} alt="" src="images/git-original.svg" />
                    <Image title="html" className="max-w-none"height={60} width={60} alt="" src="images/html5-original.svg" />
                    <Image title="bootstrap"className="max-w-none" height={60} width={60}  alt=""src="images/bootstrap-original.svg" />
                    <Image title="visual"className="max-w-none" height={60} width={60} alt="" src="images/visualstudio-plain.svg" />
                    <Image title="vscode"className="max-w-none" height={60} width={60} alt="" src="images/vscode-original.svg" />
                    <Image title="blazor"className="max-w-none" height={60} width={60} alt="" src="images/blazor.svg" />
                    <Image title="entity"className="max-w-none" height={60} width={60} alt="" src="images/entity-original.svg" />
          </div>
      </div>
    );
}

export default AutoSlider;
