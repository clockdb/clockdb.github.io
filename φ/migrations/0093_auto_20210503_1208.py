# Generated by Django 3.1.4 on 2021-05-03 17:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0092_cashflow_loanrepaymentfromequityinvestee'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cashflow',
            old_name='LoanRepaymentFromEquityInvestee',
            new_name='EquityInvesteeAdvancesRepayments',
        ),
    ]
