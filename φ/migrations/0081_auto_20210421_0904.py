# Generated by Django 3.1.4 on 2021-04-21 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0080_cashflow_investingactivitiesindiscontinuedoperations'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='entity',
            name='AnomaliesRatio',
        ),
        migrations.AddField(
            model_name='entity',
            name='AnomaliesRatio1',
            field=models.IntegerField(default=999999),
        ),
        migrations.AddField(
            model_name='entity',
            name='AnomaliesRatio2',
            field=models.IntegerField(default=999999),
        ),
        migrations.AddField(
            model_name='entity',
            name='AnomaliesRatio3',
            field=models.IntegerField(default=999999),
        ),
        migrations.AddField(
            model_name='entity',
            name='AnomaliesRatio4',
            field=models.IntegerField(default=999999),
        ),
        migrations.AddField(
            model_name='entity',
            name='AnomaliesRatio5',
            field=models.IntegerField(default=999999),
        ),
        migrations.AddField(
            model_name='entity',
            name='AnomaliesRatio6',
            field=models.IntegerField(default=999999),
        ),
    ]
