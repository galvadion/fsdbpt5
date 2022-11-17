const url = "http://localhost:8080/tasks";

export const getTasks = (onSuccess,onFinish) =>
    fetch(url)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);

export const getTask = (id,onSuccess,onFinish) =>{
  fetch(`${url}?id=${id}`)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);
}

export const addTask = (task,onSuccess,onFinish,onError) => 
fetch(url,{
    method: 'POST',
    headers:{ 
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
    body: JSON.stringify(task),
  }).then((data) => {
    if(data.status.toString().startsWith('2')){
      return data.json().then(onSuccess)
    }else{
      console.log(data)
      return data.json().then(onError)
    }
  })
  .catch(onError)
  .finally(onFinish)

export const httpEditTask = (id,task,onSuccess,onFinish) => 
  fetch(`${url}/${id}`,{
            method: 'PUT',
            headers:{ 
                'Accept': 'application/json',
                'Content-Type':'application/json'
              },
            body: JSON.stringify(task),
          }).then((data) => data.json())
          .then(onSuccess)
          .finally(onFinish)

export const httpDeleteTask = (id) =>
fetch(`${url}/${id}`,{
        method: 'DELETE',
    }).then((data) => data.json())