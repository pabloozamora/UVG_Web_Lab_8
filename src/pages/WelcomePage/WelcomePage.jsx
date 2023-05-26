import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import randomId from '../../helpers/randomString'
import styles from './WelcomePage.module.css'
import banner from '../../assets/banner.svg'
import InputNumber from '../../components/InputNumber/InputNumber'
import ImageCard from '../../components/ImageCard/ImageCard'
import cityPic from '../../assets/horizontalWallCity.svg'
import forestPic from '../../assets/cornerWallForest.svg'
import mountainPic from '../../assets/verticalWallMountain.svg'
import InputSelect from '../../components/InputSelect/InputSelect'

const WelcomePage = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    width: 4, height: 4, scenario: 'forest', time: '60', timer: false,
  })
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    const { name: field, value } = e.target
    setForm((lastValue) => ({ ...lastValue, [field]: value }))
  }

  const clearError = (e) => {
    setErrors((lastVal) => ({ ...lastVal, [e.target.name]: null }));
  };

  const validateHeight = () => {
    const valueHeight = +form.height
    if (!(valueHeight > 3 && valueHeight < 31)) {
      setErrors((lastVal) => ({ ...lastVal, height: 'La altura del laberinto debe ser entre 4 y 30' }));
      return false;
    }

    return true;
  }

  const validateWidth = () => {
    const valueWidth = +form.width
    if (!(valueWidth > 3 && valueWidth < 31)) {
      setErrors((lastVal) => ({ ...lastVal, width: 'El largo del laberinto debe ser entre 4 y 30' }));
      return false;
    }

    return true;
  }

  const validateTime = () => {
    const valueTime = +form.time
    const valueTimer = form.timer
    if (valueTimer && valueTime < 1) {
      setErrors((lastVal) => ({ ...lastVal, time: 'El límite de tiempo debe ser mayor a 0 segundos' }));
      return false;
    }

    return true;
  }

  const validateCharacter = () => {
    const valueCharacter = form.character
    if (valueCharacter == null || valueCharacter === '') {
      setErrors((lastVal) => ({ ...lastVal, character: 'Debes elegir un personaje' }));
      return false;
    }

    return true;
  }

  const handleScenario = (value) => {
    setForm((lastValue) => ({ ...lastValue, scenario: value }))
  }

  const handleCheck = () => {
    setForm((lastValue) => ({ ...lastValue, timer: !lastValue.timer }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let hasError = false;
    if (!validateHeight()) hasError = true;
    if (!validateWidth()) hasError = true;
    if (!validateTime()) hasError = true;
    if (!validateCharacter()) hasError = true;

    if (hasError) return;

    navigate('/maze', {
      state: {
        width: +form.width,
        height: +form.height,
        look: form.scenario,
        character: form.character,
        timer: form.timer,
        time: form.time,
      },
    })
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.bannerContainer}>
        <img className={styles.bannerImg} alt="Banner" src={banner} />
        <div className={styles.titleContainer}>
          <h1 className={styles.bannerTitle}>JAPANESE MAZE</h1>
        </div>
      </div>
      <div className={styles.optionsContainer}>
        <h2>Configuración del juego</h2>
        <div className={styles.optionsGrid}>
          <InputNumber
            name="height"
            title="Alto"
            error={errors.height}
            onChange={handleChange}
            value="4"
            measureUnit="espacios"
            onBlur={validateHeight}
            onFocus={clearError}
          />
          <InputNumber
            name="width"
            title="Largo"
            error={errors.width}
            onChange={handleChange}
            value="4"
            measureUnit="espacios"
            onBlur={validateWidth}
            onFocus={clearError}
          />
        </div>
        <p className={styles.sectionTitle}>Elije un escenario</p>
        <div className={styles.scenariosContainer}>
          <ImageCard
            name="scenario"
            title="Bosque"
            onClick={() => handleScenario('forest')}
            selected={form.scenario === 'forest'}
            img={forestPic}
          />
          <ImageCard
            name="scenario"
            title="Ciudad"
            onClick={() => handleScenario('city')}
            selected={form.scenario === 'city'}
            img={cityPic}
          />
          <ImageCard
            name="scenario"
            title="Montaña"
            onClick={() => handleScenario('mountain')}
            selected={form.scenario === 'mountain'}
            img={mountainPic}
          />
        </div>
        <p className={styles.sectionTitle}>Elije un personaje</p>
        <div className={styles.charactersContainer}>
          <InputSelect
            name="character"
            options={[
              { title: 'Samurai', value: 'samurai' },
              { title: 'Ninja', value: 'ninja' },
              { title: 'Exploradora', value: 'ranger' }]}
            onChange={handleChange}
            error={errors.character}
            placeholder="Elige un personaje"
            value={form.character}
          />
        </div>
        <label className={styles.checkboxLabel} htmlFor={randomId(15)}>
          <input type="checkbox" onClick={handleCheck} />
          Límite de tiempo
        </label>
        <div className={styles.timerSection}>
          {form.timer && (
          <InputNumber
            name="time"
            title="Tiempo"
            error={errors.time}
            onChange={handleChange}
            value={form.time}
            measureUnit="segundos"
            onBlur={validateTime}
            onFocus={clearError}
          />
          )}
        </div>
        <button className={styles.submitButton} aria-label="Send" type="submit" onClick={handleSubmit}>Empezar</button>
      </div>
    </div>
  )
}

export default WelcomePage
