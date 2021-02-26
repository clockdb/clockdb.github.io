from φ.models import *

entities = Entity.objects.all()

for entity in entities:
    e = Entity.objects.get(TradingSymbol=entity)
    if e.Clockφ != 0:
        print(e)



# working

# TradingSymbol to EntityCentralIndexKeys
EntityCentralIndexKeys = {
    'ABBV': '1551152',
    'AMD': '2488',
    'A': '1090872',
    'ALGN': '1097149',
    'AAPL': '320193',
    'AMAT': '6951',
    'ANET': '1596532',
    'IBM': '51143',
    'INTC': '50863',
    'LLY': '59478',
    'KO': '21344',
    'VLO': '1035002',
    'WMT': '104169',
    'MCD': '63908',
}