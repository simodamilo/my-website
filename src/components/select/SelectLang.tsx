import style from './SelectLang.module.css';

interface SelectProp {
  lang: string;
  setLang: any;
}

function SelectLang({ lang, setLang } : SelectProp) {

  const handleChange = ({ target }: any) => {
    setLang(target.value);
  }

  return(
    <div className={style.customSelect}>
      <select className={style.select} onChange={handleChange} value={lang}>
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select>
    </div>
  )
}

export default SelectLang;