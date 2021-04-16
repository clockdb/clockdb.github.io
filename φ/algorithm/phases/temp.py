





                    # financial statements dictionnaries
                    IncomeStatement = {}
                    ComprehensiveIncomeStatement = {}
                    BalanceSheet = {}
                    StockholdersEquityStatement = {}
                    CashFlowStatement = {}

                    statement_data = {}
                    statement_data['headers'] = []
                    statement_data['sections'] = []
                    statement_data['data'] = []
                    #
                    #
                    #
                    for index, row in enumerate(m):
                        #
                        print(row)
                        #
                        try:
                            cols = row.find_all('td')
                            #
                            if (len(row.find_all('th')) == 0 and len(row.find_all('strong')) == 0):
                                #
                                t = [ele.text.strip() for ele in cols]
                                #
                                GL_SEC = t[0].lower().title()
                                #
                                GL = re.sub(r"[^a-zA-Z()]", "", GL_SEC)
                                #
                                print(GL)
                                #
                                # header
                                try:
                                    #
                                    #
                                    f = [
                                        ' SHARES IN MILLIONS',
                                        ' SHARES IN THOUSANDS',
                                        ', ',
                                        ',',
                                    ]
                                    # dad
                                    qd = statement_data['headers']
                                    qb = qd[0][0].upper()
                                    #
                                    if dad is None:
                                        #
                                        for g in f:
                                            qb = qb.replace(g, '')
                                        #
                                        if qb[-11:] == 'IN MILLIONS':
                                            #
                                            dad = 1000000
                                        #
                                        elif qb[-12:] == 'IN THOUSANDS':
                                            #
                                            dad = 1000
                                        #
                                        else:
                                            #
                                            dad = 1
                                except:
                                    pass
                                #
                                # value
                                try:
                                    #
                                    z = len(m[5].find_all('td'))
                                    #
                                    x = m[5].find_all('td')[1].text
                                    #
                                    if z > 10:
                                        g = (z - 3)
                                        g = t[g]
                                    #
                                    elif z > 3:
                                        if x == '' :
                                            g = t[2]
                                        else:
                                            g = t[1]
                                    else:
                                        g = t[1]
                                    #
                                    if g == '':
                                        g = 0
                                    #
                                    w = 1
                                    if '(' in g:
                                        w = -1
                                    #
                                    g = re.sub(r"[^.0123456789]", "", str(g))
                                    g = float(g)
                                    #
                                    value = int(g * w * dad)
                                except:
                                    pass
                                #
                                # Arching
                                try:
                                    #
                                    if url == urls[0]:
                                        while GL in BalanceSheet:
                                            GL = GL + str('i')
                                        append_value(BalanceSheet, GL, value)
                                        print('Balance Sheet, ' + GL + ': ' + str('{:,}'.format(value)))
                                    #
                                    if url == urls[1]:
                                        while GL in IncomeStatement:
                                            GL = GL + str('i')
                                        append_value(IncomeStatement, GL, value)
                                        print('Income Statement, ' + GL + ': ' + str('{:,}'.format(value)))
                                    #
                                    if url == urls[2]:
                                        while GL in ComprehensiveIncomeStatement:
                                            GL = GL + str('i')
                                        append_value(ComprehensiveIncomeStatement, GL, value)
                                        print('Comprehensive Income, ' + GL + ': ' + str('{:,}'.format(value)))
                                    #
                                    if url == urls[3]:
                                        while GL in StockholdersEquityStatement:
                                            GL = GL + str('i')
                                        append_value(StockholdersEquityStatement, GL, value)
                                        print('Stockholders Equity, ' + GL + ': ' + str('{:,}'.format(value)))
                                    #
                                    if url == urls[4]:
                                        while GL in CashFlowStatement:
                                            GL = GL + str('i')
                                        append_value(CashFlowStatement, GL, value)
                                        print('Cashflow, ' + GL + ': ' + str('{:,}'.format(value)))
                                except:
                                    pass
                            #
                            elif (len(row.find_all('th')) == 0 and len(row.find_all('strong')) != 0):
                                #
                                sec_row = cols[0].text.strip()
                                #
                                statement_data['sections'].append(sec_row)
                            #
                            elif len(row.find_all('th')) != 0:
                                #
                                hed_row = [ele.text.strip() for ele in row.find_all('th')]
                                #
                                statement_data['headers'].append(hed_row)
                            #
                            else:
                                pass
                        #
                        except:
                            pass
