# Generated by Django 3.1.4 on 2021-09-16 13:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0199_auto_20210916_0758'),
    ]

    operations = [
        migrations.AddField(
            model_name='auditdata',
            name='AnomalyPreferredShares',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='auditdata',
            name='PreferredShares',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trialbalance',
            name='PreferredSharesBeginning',
            field=models.IntegerField(default=0),
        ),
    ]
