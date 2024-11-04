function calculate() {
    const A = parseFloat(document.getElementById('inputNumber').value);
    let x;
    if (A < 10) {
      x = Math.pow(A, 4);
    } else if (A > 61) {
      x = A;
    } else {
      x = A - Math.sin(Math.pow(A, 2));
    }
  
    document.getElementById('result').innerText = `Результат: ${x}`;
  
    algoritm(A, x);
  }
  
  function algoritm(A, x) {
    fetch('d:\project\serv.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ A, x }),
    })
    .then(response => {
      if (response.ok) {
        console.log('Данные успешно отправлены на сервер');
      } else {
        console.error('Ошибка отправки данных на сервер');
      }
    })
    .catch(error => {
      console.error('Произошла ошибка:', error);
    });
  }
  