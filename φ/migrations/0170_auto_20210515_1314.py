# Generated by Django 3.1.4 on 2021-05-15 18:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0169_auto_20210515_1310'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entity',
            old_name='SharePriceFourthLastYear',
            new_name='CommonSharePriceFourthLastYear',
        ),
        migrations.RenameField(
            model_name='entity',
            old_name='SharePriceLastYear',
            new_name='CommonSharePriceLastYear',
        ),
        migrations.RenameField(
            model_name='entity',
            old_name='SharePriceSecondLastYear',
            new_name='CommonSharePriceSecondLastYear',
        ),
        migrations.RenameField(
            model_name='entity',
            old_name='SharePriceThirdLastYear',
            new_name='CommonSharePriceThirdLastYear',
        ),
    ]
