---
id: 3
title: BETA API 📡
createdAt: "2022-12-09"
tags:
  - Api
  - Lançamentos
category: API
author:
  name: PR
  twitter: discloudbot
  image: /images/post/pr.png
---

<center>Olá galera estou aqui pra libera o BETA aberto da nossa nova API de Status.</center>

<!--more-->
<br>

# Status API

<p style="color: #b1b1b1">
Com ela vocês podem obter todos os dados que o comando <i style="color: white"><b>.status</b></i> retorna, como: <i style="color: white">memória</i>, <i style="color: white">cpu</i>, <i style="color: white">último reinicío</i> da aplicação e etc.
</p>

<p style="color: #b1b1b1">Além disso, você também poderá solicitar as informações do seu Plano como:</p>

> Nome: Gold, Platina, Diamond...
>
> Data de término: 10d ; 30d ; 150d

Para obter essas informações vocês terão que fazer um HTTP Resquest para para as urls: 

<div style="color: white">
✒ URL = <a href="https://discloud.app/status/user">https://discloud.app/status/user</a> <br>
✒ URL = <a href="https://discloud.app/status/bot/:id_bot">https://discloud.app/status/bot/:id_bot</a>
</div>

No lugar de :id_bot vc deve colocar o ID do seu bot.


Caso você não saiba fazer HTTP Resquest nós iremos exemplificar:
