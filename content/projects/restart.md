---
id: 1
title: Restart
description: Com ela vocês poderão reiniciar suas aplicações de qualquer lugar sem ter que digitar comandos em nosso servidor discord.
tech: Updates Javascript Python
logo: https://cdn-icons.flaticon.com/png/512/5249/premium/5249378.png?token=exp=1660766434~hmac=c96ba649a4857ccae79f827dd1e7f97a
website: https://discord.com/channels/584490943034425391/595757455238234133/921143985924358144
github: https://github.com/DisCloud/
twitter: discloudbot
---

# API ─ Restart 🔄

## Reinicie suas aplicações de qualquer lugar da forma mais prática possível

#### Para fazer esse pedido terão que fazer um HTTP Request com método POST para seguinte url:

> https://discloud.app/status/bot/:id_bot/restart

**≡** <b style="color: #d6d4d4">OBS:</b> No lugar de <b style="color: #c2fcf1">:id_bot</b> você deve colocar o **ID do seu bot**.



### JavaScript <i class="fab fa-node-js"></i>

```Javascript
    const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args)); 
```
<i>// Importando o node-fetch (atualizado) / importing node-fetch (updated)</i>

```Javascript
    fetch(`link`, { // https://discloud.app/status/bot/:id_bot/restart
        method: 'POST', //Método de request / request method
        headers: {
            "api-token": "token"
        }
    }).then(info => info.json()).then(json => console.log(json));
```
<i style="color: white">LINK: [API - Restart](https://discloud.app/status/bot/:id_bot/restart) <br>
POST:</i> <i>Método de request</i> <br>
<i style="color: white">TOKEN:</i> <i> Use o comando **.api** para receber seu token no DM.</i>

### Python

```Python
    import requests
    result = requests.post("url", headers={"api-token": "token"}).json()

    ##################
    import aiohttp
    async def get_data():
    async with aiohttp.ClientSession() as ses:
        async with ses.post("url", headers={"api-token": "token"}) as res:
            return await res.json()
```
