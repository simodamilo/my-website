import { useState } from 'react';
import style from './BackgroundSymbol.module.css';
import useInterval from '../../utils/custom-hooks/useInterval';
import { motion } from "framer-motion";

interface BackgroundSymbolProps {
  shape: string;
	initPosX: number;
	initPosY: number;
	finalPosX: number;
	finalPosY: number;
	device: string;
}

function BackgroundSymbol({ shape, initPosX, initPosY, finalPosX, finalPosY, device }: BackgroundSymbolProps) {
	const [ initialPos, setInitialPos ] = useState({ x: `${initPosX}px`, y: `${initPosY}px` })
	const [ finalPos, setFinalPos ] = useState({ x: `${finalPosX}px`, y: `${finalPosY}px` });
	const [ delay, setDelay ] = useState(device === 'Mobile' ? Math.random() * (4000) + 6000 : Math.random() * (20000) + 30000); /* Random initial delay between 30000 and 50000 */

	useInterval(() => updateFinalPos(finalPos), delay-5);

	const updateFinalPos = (finalPosParam: any) => {
		let x = 0, y = 0;
		setInitialPos({ x: finalPosParam.x, y: finalPosParam.y })
		if (finalPosParam.x === '0px' || finalPosParam.x === `${window.innerWidth-100}px`) {
			x = Math.random() * (window.innerWidth-100) + 1;
			y = Math.random() < 0.5 ? 0 : window.innerHeight-100;
		} else {
			x = Math.random() < 0.5 ? 0 : window.innerWidth-100;
			y = Math.random() * (window.innerHeight-100);
		}

		let delay = 50000;
		if ((x === 0 && finalPosParam.y === '0px') || (finalPosParam.x === '0px' && y === 0))
			delay = Math.sqrt(x^2 + y^2);
		else if ((x === 0 && finalPosParam.y === `${window.innerHeight-100}px`) || (finalPosParam.x === '0px' && y === window.innerHeight-100))
			delay = Math.sqrt(x^2 + (window.innerHeight-y)^2);
		else if ((x === window.innerWidth-100 && finalPosParam.y === '0px') || (finalPosParam.x === `${window.innerWidth-100}px` && y === 0))
			delay = Math.sqrt((window.innerWidth-x)^2 + y^2);
		else if ((x === window.innerWidth-100 && finalPosParam.y === `${window.innerHeight-100}px`) || (finalPosParam.x === `${window.innerWidth-100}px` && y === window.innerHeight-100))
			delay = Math.sqrt((window.innerWidth-x)^2 + (window.innerHeight-y)^2);
		else
			delay = 30;

		setDelay(delay*1000);

		setFinalPos({
			x: `${x}px`,
			y: `${y}px`
		})
	}

	return (
    <motion.div
      className={`${style.boxParent}`}
      key={finalPos.x + finalPos.y}
      initial={{ x: initialPos.x, y: initialPos.y }}
      animate={{ x: finalPos.x, y: finalPos.y }}
      transition={{ duration: delay/1000, ease: "linear" }}
    >
    <div className={`${style.symbol} ${shape === 'circle' ? style.circle : style.square}`}></div>
  </motion.div>
	)
}

export default BackgroundSymbol;