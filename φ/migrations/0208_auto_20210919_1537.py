# Generated by Django 3.1.4 on 2021-09-19 20:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0207_auto_20210916_0936'),
    ]

    operations = [
        migrations.RenameField(
            model_name='auditdata',
            old_name='HistoricalReinvestmentOfMaintenance',
            new_name='ReinvestmentOfMaintenance',
        ),
    ]
