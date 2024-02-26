function feedback(action, status) {
    //
    let token = "7043261922:AAG-ImKOB9k6P6Gv8sV7Ge94_IBVIgiwXRw";/* :TODO NOTSECURITY REWERITE */
    //use this for testing
   //let chat_id = "190404167";
    //Aram ID
    //use this for production
    let chat_id = "1329475336";
    let user_phone = prompt('Введите discord для контакта с вами');
    var msg = `${action} от ${user_phone}`;// from ${getCookie("@")}`;
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${msg}&parse_mode=html`;
  
    if (user_phone !== "" && user_phone !== null) {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          alert(`Благодарим за обращение «${action}».\nСейчас ответственный свяжется с вами`)
          window.location.href = "/#menu";
        });
    }
    else { console.log(' no null')}
  
  }