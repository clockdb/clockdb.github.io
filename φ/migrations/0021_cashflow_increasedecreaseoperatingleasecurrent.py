# Generated by Django 3.1.4 on 2021-03-09 03:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0020_auto_20210308_1648'),
    ]

    operations = [
        migrations.AddField(
            model_name='cashflow',
            name='IncreaseDecreaseOperatingLeaseCurrent',
            field=models.IntegerField(default=0),
        ),
    ]
