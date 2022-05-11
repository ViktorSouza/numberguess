import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client'
import './style.css'
const root = createRoot(document.getElementById('root'))
var result = ''

function Main() {
	return (
		<div className='main'>
			<h1
				style={{
					color: 'cyan',
				}}
			>
				Celsius to Fahrenheit
			</h1>
			<h2>
				Put the type you want and convert the temperature in one second!
			</h2>
			<p>Convert to</p>
			{<Inputs></Inputs>}
		</div>
	)
}

function Inputs() {
	return (
		<Fragment>
			<label htmlFor='Fahrenheit'>
				<input type='radio' name='choose' id='fahrenheit' />
				Fahrenheit
			</label>
			<label htmlFor='Celsius'>
				<input type='radio' name='choose' id='celsius' />
				Celsius
			</label>
			<input type='number' name='number' id='number' placeholder='Type the temperature'/>
			<input type='button' value='Convert' onClick={convert} />
			{<Result inputResult={result} />}
		</Fragment>
	)
}

function Result(input) {
	const { inputResult } = input
	return (
		<p style={{
      fontWeight: '800'
    }}>
			Result:
			<span className='result'>{inputResult}</span>
		</p>
	)
}

function convert() {
	var number = document.querySelector('#number')
	var fahrenheit = document.getElementById('fahrenheit')
	var celsius = document.getElementById('celsius')
	//Check which is checked
	if (number.value == '') {
		result = 'Please, type a number!'
		root.render(<Main></Main>)
	}
	//----
	else if (celsius.checked) {
		number = Number(number.value)
		result = `${number}°C is ${((number * 9) / 5 + 32).toFixed(2)}°F`
		console.log('celsius')

		root.render(<Main></Main>)
	}
	//----
	else if (fahrenheit.checked) {
    number = Number(number.value)
    result = `${number}°F is ${(((number - 32) * 5) / 9).toFixed(2)}°C`
		root.render(<Main></Main>)
	} else {
		result = 'Select a option!'
		root.render()
	}
}
root.render(<Main />)
