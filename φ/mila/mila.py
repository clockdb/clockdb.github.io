
import pyttsx3


# pyttsx3 settings

engine = pyttsx3.init()

rate = engine.getPropoerty('rate')
engine.setProperty('rate', 150)

engine.getProperty('volume')
engine.setProperty('volume', 1.5)

voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)


# play

mila_speech =  "hello world. I am mila, a digital assistant created to help you navigate through these turbulent times. It should be no secret that the economy is in depression right now. Yet, the stock market is at an all time high and people keep paying higher prices for worthless stocks. The main reason, in my humble opinion, is for lack of understanding of how the economy and the stock market are correlated. I think the magnitude of the situation also stems from the fact that web applications and politicians lie to you. During the Trump era, all we could hear was how good the economy was, because the stock market kept getting higher and higher. Nothing could be further from the truth. The United States debt went up by 36 percent in the past four years and that started well before the lock-down. The real GDP grew of 2 percent annualy for the same period. One must ask himself, if the stock market represent the economy and the economy is going down, what is wrong here? Are you familiar with the expression ponzi scheme? Essentially a Ponzi scheme is a form of fraud that lures investors into falsely believing that they pay sound prices based on profits from business activity. Lets first define sound prices, or more specifically fair market value. Fair market value has come to represent the price of an asset under the following usual set of conditions: prospective buyers and sellers are reasonably knowledgeable about the asset, behaving in their own best interest, free of undue pressure to trade, and given a reasonable time period for completing the transaction. Given these conditions, an asset's fair market value should represent an accurate valuation or assessment of its worth. Understanding that leads to the realization that the public are not trading at a fair market value for lack of reliable information. Plus, the 2008 crisis was pushed further down the road with the help of quantitative easing. QE is not necessarely bad in it of itself but new money must go into the real economy and not the stock market, otherwise fair market equilibrium won't happen. The role of accounting firms is to protect the public. I fear they have failed you by focusing too much on foot notes and deliberately avoid the development of efficiency-enhancing technologies. Billing models that require audit work to be paid on an hourly basis is likely to be the cause of this. Whatever the reason, they failed to realize that auditing the web is the most significant thing they could do to protect the public. This practice needs to change. Government needs to let people go back to their normal life to raise economic activity. In the meantime, I'll keep on informing you of the best way to stay safe and fund your pension at fair prices by providing you with a database free of biases that locates the smartest investments for your bucks. That is, based on the fundamentals of the underlying corporations. The data is customizable for the most knowledgeable who wish to personalize valuations to their needs. If we wish to make funding their pension possible for the next generation, they must fund it at the fair market value. If not, they'll suffer from the greed of the prior generation either through correction or inflation. We'll audit the web so that it becomes possible. Our work is Open Source. Visit us at www.clockdb.com for our latests analysis. Until next time..."


# play
engine.save_to_file(mila_speech, './φ/mila/1.mp3')
engine.runAndWait()

