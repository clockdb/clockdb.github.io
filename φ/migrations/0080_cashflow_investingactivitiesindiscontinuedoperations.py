# Generated by Django 3.1.4 on 2021-04-20 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0079_database_phase78'),
    ]

    operations = [
        migrations.AddField(
            model_name='cashflow',
            name='InvestingActivitiesInDiscontinuedOperations',
            field=models.IntegerField(default=0),
        ),
    ]
