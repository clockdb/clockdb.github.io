# Generated by Django 3.1.4 on 2021-05-15 03:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0158_auto_20210514_2144'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entity',
            name='StockPrice',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='entity',
            name='db',
            field=models.IntegerField(default=0),
        ),
    ]
