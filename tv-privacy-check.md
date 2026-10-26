# Is your TV tracking what you watch? A 2-minute check

Most smart TVs use ACR (automatic content recognition): the TV recognises what is on screen and reports it for ad profiles. A 2024 study of Samsung and LG TVs (IMC 2024, "Watching TV with the Second-Party", arxiv.org/abs/2409.06203) found it works even when the TV is used as a plain screen over HDMI, and that opting out stops the traffic to the ACR servers.

## Prompt (ChatGPT, Claude or Gemini)

```
my TV: [brand, model, year]. walk me through its privacy settings one step at a time.
find: viewing information / content recognition (ACR), voice and microphone, interest-based ads, and which connected devices (soundbar, bluetooth speaker, remote) have a microphone.
for each step give me the exact menu path and what "off" looks like, then wait until I say "done".
```

## Where the switch hides (names vary by year)

| Brand | Look for |
|---|---|
| Samsung | Settings → General & Privacy → Terms & Privacy → Viewing Information Services. Also Interest-Based Ads, Voice Recognition |
| LG | Settings → General → System → Additional Settings → Live Plus. Also User Agreements |
| Vizio | Viewing Data |
| Roku TVs (TCL, Hisense...) | Privacy → Smart TV Experience → Use info from TV inputs |
| Sony / Google TV | Samba Interactive TV, plus Privacy → Ads |

## After that

- Recheck after every TV update: some switches come back on.
- Optional: an ad-blocking DNS on the router (NextDNS, AdGuard DNS, Pi-hole) shows how often the TV phones home and blocks it.

## Real TVs people checked (October 2026, shared with permission)

- Samsung: Pi-hole log, 24 hours, 320 requests to the ACR server and 500 to Samsung cloud, all blocked.
- TCL: a tracking app (com.tcl.usercenter) re-enables itself after every reboot.
- Dijitsu: a hidden app posing as a system tool, connecting to 30+ servers.
